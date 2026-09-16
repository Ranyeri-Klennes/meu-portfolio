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
  const imageList = repo.images && repo.images.length > 0 ? repo.images : (repo.image ? [repo.image] : []);
  const [activeImgIdx, setActiveImgIdx] = React.useState(0);

  React.useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % imageList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div 
      key={`${set}-${idx}`} 
      className="w-[290px] sm:w-[330px] h-[350px] sm:h-[380px] mx-3 sm:mx-4 group relative glass-card dark:bg-slate-900/90 dark:border dark:border-slate-800 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-400 shrink-0 flex flex-col will-change-transform cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="h-44 sm:h-48 bg-slate-950/20 dark:bg-slate-950/40 flex items-center justify-center overflow-hidden relative border-b border-white/40 dark:border-slate-800/80">
        {imageList.length > 0 ? (
          <>
            {imageList.map((imgSrc, imgI) => (
              <img 
                key={imgSrc}
                src={imgSrc} 
                alt={`${repo.name} ${imgI + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
                  imgI === activeImgIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'
                }`}
                loading="lazy"
              />
            ))}
            {imageList.length > 1 && (
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-2 py-1 rounded-full bg-slate-950/60 backdrop-blur-md">
                {imageList.map((_, dotI) => (
                  <span
                    key={dotI}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotI === activeImgIdx ? 'w-4 bg-blue-400' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-slate-400 dark:text-slate-600 group-hover:scale-115 group-hover:text-blue-500 transition-all duration-400">
            <CodeIcon className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {repo.name}
          </h3>
          {repo.language && (
            <span className={`text-[10px] ${colors.bg} ${colors.text} px-2.5 py-1 rounded-full font-bold shrink-0 border border-current/20`}>
              {repo.language}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {repo.description ?? 'Projeto desenvolvido por Ranyeri Klennes com foco em arquitetura e soluções técnicas.'}
        </p>
        <div className="flex justify-end items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <span className="text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Explorar projeto
          </span>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-300 transition-all shadow-xs active:scale-90" 
            aria-label={`Abrir ${repo.name} no GitHub`}
          >
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
