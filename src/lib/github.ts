import { GitHubRepo } from '../types/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

async function fetchReadme(repoName: string): Promise<string | null> {
  const branches = ['main', 'master'];
  for (const branch of branches) {
    const url = `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/${branch}/README.md`;
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) return await res.text();
    } catch { continue; }
  }
  return null;
}

export async function getRepoMetadata(repoName: string): Promise<{ image: string | null; readmeDescription: string | null }> {
  try {
    const text = await fetchReadme(repoName);
    if (!text) return { image: null, readmeDescription: null };

    // ── Extração de Imagem ──
    let image: string | null = null;
    const mdImgRegex = /!\[.*?\]\((?!https?:\/\/)(.*?\.(?:png|jpg|jpeg|gif|webp|svg))\)|!\[.*?\]\((https?:\/\/.*?\.(?:png|jpg|jpeg|gif|webp|svg))\)/i;
    const mdImgMatch = text.match(mdImgRegex);
    if (mdImgMatch) {
      const path = mdImgMatch[1] || mdImgMatch[2];
      image = path.startsWith('http') ? path : `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/main/${path.replace(/^\.\//, '')}`;
    } else {
      const htmlImgRegex = /<img[^>]+src=["'](?!https?:\/\/)(.*?\.(?:png|jpg|jpeg|gif|webp|svg))["']|<img[^>]+src=["'](https?:\/\/.*?\.(?:png|jpg|jpeg|gif|webp|svg))["']/i;
      const htmlImgMatch = text.match(htmlImgRegex);
      if (htmlImgMatch) {
        const path = htmlImgMatch[1] || htmlImgMatch[2];
        image = path.startsWith('http') ? path : `https://raw.githubusercontent.com/ranyeri-klennes/${repoName}/main/${path.replace(/^\.\//, '')}`;
      }
    }

    // ── Extração de Descrição Inteligente ──
    const lines = text.split('\n');
    let readmeDescription: string | null = null;

    for (let line of lines) {
      line = line.trim();
      // Pular se: vazio, header (#), imagem (![), badge ([![), citação (>), lista (* / -), tabela (|)
      if (!line || 
          line.startsWith('#') || 
          line.startsWith('![') || 
          line.startsWith('[![') || 
          line.startsWith('>') || 
          line.startsWith('* ') || 
          line.startsWith('- ') || 
          line.startsWith('|')) continue;

      // Limpar links [texto](url) -> texto
      let cleanLine = line.replace(/\[(.*?)\]\(.*?\)/g, '$1');
      // Limpar negrito/itálico **text** -> text
      cleanLine = cleanLine.replace(/[\*_]{1,3}(.*?)[\*_]{1,3}/g, '$1');
      // Limpar badges de texto puro se houver (ex: [badge])
      cleanLine = cleanLine.replace(/\[.*?\]/g, '');

      if (cleanLine.length > 30) {
        readmeDescription = cleanLine;
        break;
      }
    }

    if (readmeDescription) {
      if (readmeDescription.length > 180) {
        readmeDescription = readmeDescription.substring(0, 177) + '...';
      }
    }

    return { image, readmeDescription };
  } catch {
    return { image: null, readmeDescription: null };
  }
}

export async function getGraphQLData(): Promise<{
  pinned: Array<{ name: string; description: string | null; url: string; primaryLanguage: string | null; stargazers_count: number; forks_count: number; updated_at: string; topics: string[]; default_branch: string }>;
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
            stargazers { totalCount }
            forkCount
            updatedAt
            repositoryTopics(first: 5) {
              nodes {
                topic { name }
              }
            }
            defaultBranchRef { name }
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
    const pinned = nodes.map((n: any) => ({
      name: n.name,
      description: n.description,
      url: n.url,
      primaryLanguage: n.primaryLanguage?.name ?? null,
      stargazers_count: n.stargazers?.totalCount ?? 0,
      forks_count: n.forkCount ?? 0,
      updated_at: n.updatedAt,
      topics: n.repositoryTopics?.nodes?.map((t: any) => t.topic.name) ?? [],
      default_branch: n.defaultBranchRef?.name ?? 'main',
    }));
    const contributions = json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
    return { pinned, contributions };
  } catch { return { pinned: [], contributions: 0 }; }
}

export async function getGitHubData() {
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

    let rawRepos: any[] = [];

    if (pinned.length > 0) {
      rawRepos = pinned.map((p) => ({
        name: p.name,
        description: p.description,
        html_url: p.url,
        language: p.primaryLanguage,
        stargazers_count: p.stargazers_count,
        forks_count: p.forks_count,
        updated_at: p.updated_at,
        topics: p.topics,
        default_branch: p.default_branch,
      }));
    } else {
      const reposRes = await fetch('https://api.github.com/users/ranyeri-klennes/repos?sort=updated&per_page=6', {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      });
      if (reposRes.ok) {
        const json = await reposRes.json();
        rawRepos = json.map((r: any) => ({ ...r, default_branch: r.default_branch }));
      }
    }

    const metadataList = await Promise.all(rawRepos.map((r) => getRepoMetadata(r.name)));
    const repos: GitHubRepo[] = rawRepos.map((r, i) => ({
      name: r.name,
      description: metadataList[i].readmeDescription ?? r.description,
      html_url: r.html_url ?? r.url,
      language: r.language ?? r.primaryLanguage,
      image: metadataList[i].image,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      updated_at: r.updated_at,
      topics: r.topics,
      default_branch: r.default_branch ?? 'main',
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
