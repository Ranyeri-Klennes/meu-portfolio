import PortfolioClient, { GitHubRepo } from './PortfolioClient';

const CURRENT_YEAR = new Date().getFullYear();

// ── GITHUB API ──

async function getRepoImage(repoName: string): Promise<string | null> {
  const branches = ['main', 'master'];
  try {
    for (const branch of branches) {
      const url = `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/${branch}/README.md`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (!res.ok) continue;

      const text = await res.text();
      
      // 1. Markdown Image: ![alt](url)
      const mdRegex = /!\[.*?\]\((?!https?:\/\/)(.*?\.(?:png|jpg|jpeg|gif|webp|svg))\)|!\[.*?\]\((https?:\/\/.*?\.(?:png|jpg|jpeg|gif|webp|svg))\)/i;
      const mdMatch = text.match(mdRegex);

      if (mdMatch) {
        const path = mdMatch[1] || mdMatch[2];
        if (path.startsWith('http')) return path;
        return `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/${branch}/${path.replace(/^\.\//, '')}`;
      }

      // 2. HTML Image: <img src="url" />
      const htmlRegex = /<img[^>]+src=["'](?!https?:\/\/)(.*?\.(?:png|jpg|jpeg|gif|webp|svg))["']|<img[^>]+src=["'](https?:\/\/.*?\.(?:png|jpg|jpeg|gif|webp|svg))["']/i;
      const htmlMatch = text.match(htmlRegex);

      if (htmlMatch) {
        const path = htmlMatch[1] || htmlMatch[2];
        if (path.startsWith('http')) return path;
        return `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/${branch}/${path.replace(/^\.\//, '')}`;
      }
    }
  } catch { /* silence */ }
  return null;
}

async function getGraphQLData(): Promise<{
  pinned: Array<{ name: string; description: string | null; url: string; primaryLanguage: string | null }>;
  contributions: number;
}> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return { pinned: [], contributions: 0 };

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
      contributionsCollection(from: "${CURRENT_YEAR}-01-01T00:00:00Z", to: "${CURRENT_YEAR}-12-31T23:59:59Z") {
        contributionCalendar {
          totalContributions
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
    if (!res.ok) return { pinned: [], contributions: 0 };
    const json = await res.json();
    const nodes = json?.data?.user?.pinnedItems?.nodes ?? [];
    const pinned = nodes.map((n: { name: string; description: string | null; url: string; primaryLanguage?: { name: string } | null }) => ({
      name: n.name,
      description: n.description,
      url: n.url,
      primaryLanguage: n.primaryLanguage?.name ?? null,
    }));
    const contributions: number =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
    return { pinned, contributions };
  } catch { return { pinned: [], contributions: 0 }; }
}

async function getGitHubData() {
  try {
    const [userRes, { pinned, contributions }] = await Promise.all([
      fetch('https://api.github.com/users/ranyeri-klennes', {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }),
      getGraphQLData(),
    ]);
    if (!userRes.ok) throw new Error('GitHub user API error');
    const user = await userRes.json();

    let rawRepos: Array<{ name: string; description: string | null; html_url: string; language: string | null }> = [];

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
      if (reposRes.ok) rawRepos = await reposRes.json();
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
      contributions,
      repos,
    };
  } catch {
    return { publicRepos: 10, bio: null, contributions: 0, repos: [] };
  }
}

// ── SERVER COMPONENT (Page) ──
export default async function Home() {
  const { publicRepos, bio, contributions, repos } = await getGitHubData();
  return <PortfolioClient publicRepos={publicRepos} bio={bio} contributions={contributions} repos={repos} />;
}
