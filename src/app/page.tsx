import PortfolioClient from './PortfolioClient';
import { getGitHubData } from '../lib/github';

// ── SERVER COMPONENT (Page) ──
export default async function Home() {
  const { publicRepos, bio, contributions, repos } = await getGitHubData();
  return <PortfolioClient publicRepos={publicRepos} bio={bio} contributions={contributions} repos={repos} />;
}
