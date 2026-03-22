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
              <div className="relative aspect-video rounded-3xl overflow-hidden glass-premium shadow-2xl border border-white/50 dark:border-slate-700/50 group-hover:scale-[1.02] transition-transform duration-700">
                {repo.image ? (
                  <img src={repo.image} alt={repo.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <CodeIcon className="w-20 h-20 text-slate-300 dark:text-slate-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Data & Content */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border border-current/20`}>
                    {repo.language ?? 'Documentação'}
                  </span>
                  {repo.stargazers_count !== undefined && repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                      <StarIcon className="w-4 h-4 fill-current" />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.forks_count !== undefined && repo.forks_count > 0 && (
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-sm">
                      <GitBranchIcon className="w-4 h-4" />
                      {repo.forks_count}
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {repo.name}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
                  {repo.description ?? 'Exploração técnica de arquitetura e implementação.'}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {repo.topics.map((topic) => (
                      <span key={topic} className="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded">
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
                    className="flex-1 bg-slate-900 dark:bg-blue-600 text-white text-center py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10"
                  >
                    Ver Repositório
                  </a>
                  <a 
                    href={`${repo.html_url}/archive/refs/heads/main.zip`}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center justify-center"
                    aria-label="Download Source"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-600 dark:text-slate-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
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
