export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  image: string | null;
};

export type PortfolioProps = {
  publicRepos: number;
  bio: string | null;
  contributions: number;
  repos: GitHubRepo[];
};
