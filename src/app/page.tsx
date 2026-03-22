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
      const mdMatch = text.match(/!\[.*?\]\((https?:\/\/[^\s)]+\.(?:png|jpg|jpeg|gif|webp|svg)[^\s)]*)\)/i);
      if (mdMatch) return mdMatch[1];
      const htmlMatch = text.match(/<img[^>]+src=["'](https?:\/\/[^"']+\.(?:png|jpg|jpeg|gif|webp|svg)[^"']*)["']/i);
      if (htmlMatch) return htmlMatch[1];
    }
  } catch { /* silently fail */ }
  return null;
}

async function getPinnedRepos(): Promise<Array<{ name: string; description: string | null; url: string; primaryLanguage: string | null }>> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return [];

  const query = `{
    user(login: "ranyeri-klennes") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            primaryLanguage { name }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const nodes = json?.data?.user?.pinnedItems?.nodes ?? [];
    return nodes.map((n: { name: string; description: string | null; url: string; primaryLanguage?: { name: string } | null }) => ({
      name: n.name,
      description: n.description,
      url: n.url,
      primaryLanguage: n.primaryLanguage?.name ?? null,
    }));
  } catch { return []; }
}

async function getGitHubData() {
  try {
    const userRes = await fetch('https://api.github.com/users/ranyeri-klennes', {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    });
    if (!userRes.ok) throw new Error('GitHub user API error');
    const user = await userRes.json();

    // Try pinned repos first (requires GITHUB_TOKEN), fallback to recent
    let rawRepos: Array<{ name: string; description: string | null; html_url: string; language: string | null }> = [];

    const pinned = await getPinnedRepos();
    if (pinned.length > 0) {
      rawRepos = pinned.map((p) => ({
        name: p.name,
        description: p.description,
        html_url: p.url,
        language: p.primaryLanguage,
      }));
    } else {
      const reposRes = await fetch('https://api.github.com/users/ranyeri-klennes/repos?sort=updated&per_page=6', {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      });
      if (reposRes.ok) {
        rawRepos = await reposRes.json();
      }
    }

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
    return { publicRepos: 10, bio: null, repos: [] };
  }
}

// ── SERVER COMPONENT (Page) ──
export default async function Home() {
  const { publicRepos, bio, repos } = await getGitHubData();
  return <PortfolioClient publicRepos={publicRepos} bio={bio} repos={repos} />;
}
