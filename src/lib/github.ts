import { GitHubRepo } from '../types/portfolio';
import { FALLBACK_FEATURED_PROJECTS } from '../constants/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

async function fetchReadme(repoName: string, owner: string = 'ranyeri-klennes', defaultBranch: string = 'main'): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  
  // 1. Tentar API autenticada do GitHub (funciona para repos privados e públicos)
  if (token) {
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.raw',
        },
        next: { revalidate: 3600 },
      });
      if (res.ok) return await res.text();
    } catch {}
  }

  // 2. Tentar raw.githubusercontent.com
  const branches = [defaultBranch, 'main', 'master'].filter((v, i, a) => a.indexOf(v) === i);
  for (const branch of branches) {
    const url = `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/README.md`;
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) return await res.text();
    } catch { continue; }
  }
  return null;
}

export async function getRepoMetadata(repoName: string, owner: string = 'ranyeri-klennes', defaultBranch: string = 'main'): Promise<{ image: string | null; readmeDescription: string | null }> {
  const fallback = FALLBACK_FEATURED_PROJECTS.find(p => p.name.toLowerCase() === repoName.toLowerCase());

  try {
    const text = await fetchReadme(repoName, owner, defaultBranch);

    // ── Extração da PRIMEIRA Imagem do Readme (Markdown ou HTML, com ou sem extensão) ──
    let image: string | null = null;
    if (text) {
      const mdImgMatch = text.match(/!\[.*?\]\((https?:\/\/[^\s\)]+|[^\s\)]+?\.(?:png|jpg|jpeg|gif|webp|svg))\)/i);
      const htmlImgMatch = text.match(/<img[^>]+src=["'](https?:\/\/[^"']+|[^"']+?\.(?:png|jpg|jpeg|gif|webp|svg))["']/i);

      let rawImg: string | null = null;
      if (mdImgMatch && htmlImgMatch) {
        rawImg = (mdImgMatch.index! < htmlImgMatch.index!) ? mdImgMatch[1] : htmlImgMatch[1];
      } else if (mdImgMatch) {
        rawImg = mdImgMatch[1];
      } else if (htmlImgMatch) {
        rawImg = htmlImgMatch[1];
      }

      if (rawImg) {
        image = rawImg.startsWith('http')
          ? rawImg
          : `https://raw.githubusercontent.com/${owner}/${repoName}/${defaultBranch}/${rawImg.replace(/^\.\//, '')}`;
      }
    }

    // Se nenhuma imagem foi encontrada no README ou se é privada, usar a imagem local correspondente
    if (!image && fallback?.image) {
      image = fallback.image;
    } else if (!image) {
      image = `/projects/${repoName}.jpg`;
    }

    // ── Extração de Descrição Inteligente do Readme ──
    let readmeDescription: string | null = null;
    if (text) {
      const lines = text.split('\n');
      for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith('#') || line.startsWith('![') || line.startsWith('<img') || line.startsWith('|') || line.startsWith('---') || line.startsWith('```') || line.startsWith(':::')) continue;
        
        let clean = line
          .replace(/\[(.*?)\]\(.*?\)/g, '$1')
          .replace(/[\*_]{1,3}(.*?)[\*_]{1,3}/g, '$1')
          .replace(/<[^>]+>/g, '')
          .replace(/^[>\s\-\*\•\d\.\)]+/, '')
          .trim();

        if (clean.length > 25 && !clean.startsWith('npm') && !clean.startsWith('yarn') && !clean.startsWith('git') && !clean.startsWith('cd ') && !clean.startsWith('First, run')) {
          readmeDescription = clean;
          break;
        }
      }

      if (readmeDescription && readmeDescription.length > 180) {
        readmeDescription = readmeDescription.substring(0, 177) + '...';
      }
    }

    if (!readmeDescription && fallback?.description) {
      readmeDescription = fallback.description;
    }

    return { image, readmeDescription };
  } catch {
    return {
      image: fallback?.image ?? `/projects/${repoName}.jpg`,
      readmeDescription: fallback?.description ?? null
    };
  }
}

export async function getGraphQLData(): Promise<{
  pinned: Array<{ name: string; description: string | null; url: string; primaryLanguage: string | null; stargazers_count: number; forks_count: number; updated_at: string; created_at: string; topics: string[]; default_branch: string }>;
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
            createdAt
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
      created_at: n.createdAt,
      topics: n.repositoryTopics?.nodes?.map((t: any) => t.topic.name) ?? [],
      default_branch: n.defaultBranchRef?.name ?? 'main',
    }));
    const contributions = json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
    return { pinned, contributions };
  } catch { return { pinned: [], contributions: 0 }; }
}

export async function getGitHubData() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const [userRes, { pinned, contributions }] = await Promise.all([
      fetch('https://api.github.com/users/ranyeri-klennes', {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 3600 },
      }),
      getGraphQLData(),
    ]);
    if (!userRes.ok) throw new Error('GitHub user API error');
    const user = await userRes.json();

    let rawRepos: any[] = [];

    // Priorizar repositórios marcados com a estrela no GitHub (Starred)
    const starredUrl = token
      ? 'https://api.github.com/user/starred?per_page=100'
      : 'https://api.github.com/users/ranyeri-klennes/starred?per_page=100';

    try {
      const starredRes = await fetch(starredUrl, {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 3600 },
      });
      if (starredRes.ok) {
        const starredJson = await starredRes.json();
        if (Array.isArray(starredJson)) {
          const userStarred = starredJson.filter((r: any) =>
            r.owner?.login?.toLowerCase() === 'ranyeri-klennes'
          );
          if (userStarred.length > 0) {
            rawRepos = userStarred.map((r: any) => ({ ...r, default_branch: r.default_branch || 'main' }));
          }
        }
      }
    } catch {
      // continua para fallbacks se falhar
    }

    // Mesclar com FALLBACK_FEATURED_PROJECTS para garantir que todos os projetos estrelados (inclusive locais/privados) estejam sempre presentes
    for (const fb of FALLBACK_FEATURED_PROJECTS) {
      if (!rawRepos.some(r => r.name.toLowerCase() === fb.name.toLowerCase())) {
        rawRepos.push(fb);
      }
    }

    const metadataList = await Promise.all(
      rawRepos.map((r) => getRepoMetadata(r.name, r.owner?.login ?? 'ranyeri-klennes', r.default_branch ?? 'main'))
    );

    const repos: GitHubRepo[] = rawRepos.map((r, i) => {
      const fallback = FALLBACK_FEATURED_PROJECTS.find(p => p.name.toLowerCase() === r.name.toLowerCase());
      return {
        name: r.name,
        description: metadataList[i].readmeDescription ?? r.description ?? fallback?.description ?? 'Projeto desenvolvido por Ranyeri Klennes.',
        html_url: r.html_url ?? r.url ?? fallback?.html_url ?? `https://github.com/Ranyeri-Klennes/${r.name}`,
        language: r.language ?? r.primaryLanguage ?? fallback?.language ?? 'TypeScript',
        image: metadataList[i].image ?? fallback?.image ?? `/projects/${r.name}.jpg`,
        images: fallback?.images,
        stargazers_count: r.stargazers_count ?? fallback?.stargazers_count ?? 1,
        forks_count: r.forks_count ?? fallback?.forks_count ?? 0,
        updated_at: r.updated_at ?? fallback?.updated_at ?? new Date().toISOString(),
        created_at: r.created_at ?? fallback?.created_at ?? new Date().toISOString(),
        topics: r.topics ?? fallback?.topics ?? [],
        default_branch: r.default_branch ?? fallback?.default_branch ?? 'main',
      };
    });

    // Ordenação Cronológica Decrescente
    repos.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());

    return {
      publicRepos: (user.public_repos as number) ?? 10,
      bio: (user.bio as string | null) ?? null,
      contributions,
      repos,
    };
  } catch {
    return {
      publicRepos: 10,
      bio: null,
      contributions: 0,
      repos: FALLBACK_FEATURED_PROJECTS,
    };
  }
}

