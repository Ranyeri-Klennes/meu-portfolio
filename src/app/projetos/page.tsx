import React from 'react';
import { getGitHubData } from '../../lib/github';
import ProjetosClient from './ProjetosClient';

export const metadata = {
  title: "Projetos Detalhados | Ranyeri Klennes",
  description: "Exploração técnica aprofundada nos repositórios e tecnologias desenvolvidas por Ranyeri Klennes.",
};

export default async function Projetos() {
  const { repos } = await getGitHubData();

  return <ProjetosClient repos={repos} />;
}
