import PortfolioClient, { GitHubRepo } from './PortfolioClient';

// ── GITHUB API ──

async function getRepoImage(repoName: string): Promise<string | null> {
  try {
    const readmeUrls = [
      `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/main/README.md`,
      `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/master/README.md`,
    ];

    for (const url of readmeUrls) {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (!res.ok) continue;
      const text = await res.text();

      // Markdown: ![alt](url)
      const mdMatch = text.match(/!\[.*?\]\((https?:\/\/[^\s)]+\.(?:png|jpg|jpeg|gif|webp|svg)[^\s)]*)\)/i);
      if (mdMatch) return mdMatch[1];

      // HTML: <img src="url"  or  <img src='url'
      const htmlMatch = text.match(/<img[^>]+src=["'](https?:\/\/[^"']+\.(?:png|jpg|jpeg|gif|webp|svg)[^"']*)["']/i);
      if (htmlMatch) return htmlMatch[1];
    }
  } catch {
    // silently fail
  }
  return null;
}

async function getGitHubData() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/ranyeri-klennes', {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }),
      fetch('https://api.github.com/users/ranyeri-klennes/repos?sort=updated&per_page=6', {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

    const user = await userRes.json();
    const rawRepos: Array<{
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
    }> = await reposRes.json();

    // Fetch images in parallel
    const images = await Promise.all(rawRepos.map((r) => getRepoImage(r.name)));

    const repos: GitHubRepo[] = rawRepos.map((r, i) => ({
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      language: r.language,
      image: images[i],
    }));

    return {
      publicRepos: (user.public_repos as number) ?? 10,
      bio: (user.bio as string | null) ?? null,
      repos,
    };
  } catch {
    // Fallback graceful
    return {
      publicRepos: 10,
      bio: null,
      repos: [],
    };
  }
}

// ── SERVER COMPONENT (Page) ──
export default async function Home() {
  const { publicRepos, bio, repos } = await getGitHubData();
  return <PortfolioClient publicRepos={publicRepos} bio={bio} repos={repos} />;
}
