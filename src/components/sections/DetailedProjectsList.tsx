import React from 'react';
import Link from 'next/link';
import { GitHubRepo } from '../../types/portfolio';
import { ArrowIcon, StarIcon, GitBranchIcon, CodeIcon } from '../Icons';
import { langColor } from '../../constants/portfolio';

type DetailedProjectsListProps = {
  repos: GitHubRepo[];
};

export const DetailedProjectsList = ({ repos }: DetailedProjectsListProps) => (
  <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
    <div className="mb-16">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6 group"
      >
        <ArrowIcon className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
        Voltar para a Home
      </Link>
      <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
        Exploração <span className="text-blue-600">Técnica</span>
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
        Uma visão aprofundada nos repositórios, arquiteturas e métricas que compõem meu arsenal de engenharia.
      </p>
    </div>

    <div className="space-y-20 sm:space-y-32">
      {repos.map((repo, idx) => {
        const lang = repo.language ?? 'default';
        const colors = langColor[lang] ?? langColor.default;
        
        return (
          <section key={idx} className="reveal active group">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Media Preview */}
              <div className="relative aspect-video rounded-3xl overflow-hidden glass-premium shadow-2xl border border-white/50 dark:border-slate-800 group-hover:scale-[1.01] transition-all duration-500">
                {repo.image ? (
                  <img 
                    src={repo.image} 
                    alt={repo.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                    <CodeIcon className="w-20 h-20 text-slate-300 dark:text-slate-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Data & Content */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border border-current/20 shadow-xs`}>
                    {repo.language ?? 'Documentação'}
                  </span>
                  {repo.stargazers_count !== undefined && repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm bg-amber-500/10 dark:bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                      <StarIcon className="w-4 h-4 fill-current" />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.forks_count !== undefined && repo.forks_count > 0 && (
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-sm bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                      <GitBranchIcon className="w-4 h-4" />
                      {repo.forks_count}
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">
                  {repo.description ?? 'Projeto desenvolvido com excelência técnica, arquitetura moderna e foco em entrega de valor.'}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {repo.topics.map((topic) => (
                      <span key={topic} className="text-[11px] uppercase tracking-wider font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/40 px-2.5 py-1 rounded-lg">
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white text-center py-3.5 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    Ver no GitHub
                  </a>
                  <a 
                    href={`https://github.com/ranyeri-klennes/${repo.name}/archive/refs/heads/${repo.default_branch || 'main'}.zip`}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-xs"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Baixar código-fonte de ${repo.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </div>
            {idx < repos.length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mt-20 sm:mt-32" />
            )}
          </section>
        );
      })}
    </div>
  </div>
);
