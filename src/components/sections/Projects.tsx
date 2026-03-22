import React from 'react';
import Link from 'next/link';
import { GitHubRepo } from '../../types/portfolio';
import { ProjectCard } from '../ProjectCard';
import { ArrowIcon } from '../Icons';

type ProjectsProps = {
  repos: GitHubRepo[];
};

export const Projects = ({ repos }: ProjectsProps) => (
  <section id="projetos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 reveal relative group/carousel overflow-hidden">
    <div className="flex items-center gap-4 mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Projetos em Destaque</h2>
      <Link 
        href="/projetos" 
        className="p-2.5 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm group/link-detail"
        aria-label="Ver todos os projetos detalhados"
      >
        <ArrowIcon className="w-5 h-5 transition-transform group-hover/link-detail:translate-x-0.5" />
      </Link>
    </div>
    
    {/* Setas Laterais Premium */}
    <button
      onClick={() => {
        const el = document.getElementById('carousel-track');
        if (el) el.scrollBy({ left: -336, behavior: 'smooth' });
      }}
      className="absolute left-4 sm:left-8 top-[60%] -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-white/60 dark:hover:bg-slate-800/60 text-slate-800 dark:text-white group/btn-prev"
      aria-label="Anterior"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform group-hover/btn-prev:-translate-x-0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15,18 9,12 15,6" />
      </svg>
    </button>

    <button
      onClick={() => {
        const el = document.getElementById('carousel-track');
        if (el) el.scrollBy({ left: 336, behavior: 'smooth' });
      }}
      className="absolute right-4 sm:right-8 top-[60%] -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-white/60 dark:hover:bg-slate-800/60 text-slate-800 dark:text-white group/btn-next"
      aria-label="Próximo"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform group-hover/btn-next:translate-x-0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9,18 15,12 9,6" />
      </svg>
    </button>

    <div 
      id="carousel-track"
      className="w-full overflow-x-auto pause-on-hover [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="flex w-max animate-scroll py-6 sm:py-8">
        {[1, 2, 3].map((set) => (
          <React.Fragment key={set}>
            {repos.map((repo, idx) => (
              <ProjectCard key={`${set}-${idx}`} repo={repo} set={set} idx={idx} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);
