import React from 'react';
import { StoryCollage } from '../StoryCollage';
import { SchoolIcon } from '../Icons';

type BentoGridProps = {
  contributions: number;
  publicRepos: number;
  bio: string | null;
};

export const BentoGrid = ({ contributions, publicRepos, bio }: BentoGridProps) => (
  <section id="bento" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto reveal">
    <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 tracking-tight text-slate-900 dark:text-white">Minha Jornada</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" style={{ gridAutoRows: '220px' }}>

      {/* Main card — Story Collage */}
      <div className="bento-card glass-premium dark:bg-slate-800 rounded-[2rem] flex flex-col justify-between relative overflow-hidden sm:col-span-2 sm:row-span-2 min-h-[440px] dark:border dark:border-slate-600/50">
        <StoryCollage />
        <div className="absolute top-4 left-4 z-40">
          <span className="inline-flex items-center gap-1.5 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-lg border border-white/50 dark:border-white/10 tracking-wide">
            Sobre mim
          </span>
        </div>
      </div>

      {/* Stat 1 — Contribuições GitHub */}
      <div className="bento-card glass-premium dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center dark:border dark:border-slate-600/50">
        <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">
          <span className="text-blue-600 dark:text-blue-400">+</span>{contributions > 0 ? contributions : 50}
        </div>
        <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">Contribuições</div>
      </div>

      {/* Stat 2 — Repositórios públicos */}
      <div className="bento-card glass-premium dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center dark:border dark:border-slate-600/50">
        <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">
          {publicRepos}
        </div>
        <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">Repositórios</div>
      </div>

      {/* Formação */}
      <div className="bento-card sm:col-span-2 bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 text-white flex justify-between items-center overflow-hidden relative border border-slate-700/50 dark:border-slate-600/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none"></div>
        <div className="z-10">
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4 inline-block">hard</span>
          <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Fullstack Data &amp; Automation</h4>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xs">{bio ?? 'Desenvolvedor .NET | C# | ASP.NET Core | SQL Server | Automação com Python | Pós-graduando em Ciência de Dados'}</p>
        </div>
        <SchoolIcon className="w-16 h-16 sm:w-20 sm:h-20 text-white/10 -rotate-12 z-10 shrink-0" />
      </div>
    </div>
  </section>
);
