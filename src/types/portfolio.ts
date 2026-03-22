export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  image: string | null;
  stargazers_count?: number;
  forks_count?: number;
  updated_at?: string;
  created_at?: string;
  topics?: string[];
  default_branch?: string;
};

export type PortfolioProps = {
  publicRepos: number;
  bio: string | null;
  contributions: number;
  repos: GitHubRepo[];
};
