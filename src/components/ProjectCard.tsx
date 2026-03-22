import React from 'react';
import { GitHubRepo } from '../types/portfolio';
import { langColor } from '../constants/portfolio';
import { CodeIcon, ArrowIcon } from './Icons';

type ProjectCardProps = {
  repo: GitHubRepo;
  set: number;
  idx: number;
};

export const ProjectCard = ({ repo, set, idx }: ProjectCardProps) => {
  const lang = repo.language ?? 'default';
  const colors = langColor[lang] ?? langColor.default;

  return (
    <div 
      key={`${set}-${idx}`} 
      className="w-[280px] sm:w-[320px] h-[320px] sm:h-[360px] mx-3 sm:mx-4 group relative glass-card dark:bg-slate-800 dark:border dark:border-slate-600/50 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:z-20 shrink-0 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="h-44 sm:h-48 bg-gradient-to-br from-slate-100/60 dark:from-slate-700/40 to-slate-200/30 dark:to-slate-800/30 flex items-center justify-center overflow-hidden relative border-b border-white/50 dark:border-slate-700/50">
        {repo.image ? (
          <img src={repo.image} alt={repo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="text-slate-300 dark:text-slate-600 group-hover:scale-125 group-hover:text-blue-500 transition-all duration-500">
            <CodeIcon className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">{repo.name}</h3>
          {repo.language && (
            <span className={`text-[10px] ${colors.bg} ${colors.text} px-2 py-1 rounded-full font-bold shrink-0 backdrop-blur-md`}>{repo.language}</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {repo.description ?? 'Repositório dedicado à inovação e otimização técnica.'}
        </p>
        <div className="flex justify-end items-center mt-3">
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/60 dark:bg-slate-700/60 hover:bg-white dark:hover:bg-slate-700 transition shadow-sm border border-white/80 dark:border-slate-600" aria-label={`Abrir ${repo.name} no GitHub`}>
            <ArrowIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </a>
        </div>
      </div>
    </div>
  );
};
