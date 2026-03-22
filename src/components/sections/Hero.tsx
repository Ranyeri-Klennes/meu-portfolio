import React from 'react';
import { ArrowIcon, GitHubIcon, LinkedInIcon } from '../Icons';

type HeroProps = {
  isDark: boolean;
};

export const Hero = ({ isDark }: HeroProps) => (
  <header id="inicio" className="relative min-h-[90vh] flex items-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto reveal active">
    <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="flex flex-col items-start z-10">
        <div className="inline-flex items-center gap-2.5 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-xs font-bold mb-7 sm:mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 transition-all duration-500 cursor-default group">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="tracking-wide">Disponível para novos desafios</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] mb-7 sm:mb-9 tracking-tight text-slate-800 dark:text-white/95 transition-colors">
          Tecnologia que descomplica,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 py-1">Automação</span> que Transforma Vidas.
        </h1>

        <p className="text-base sm:text-lg text-slate-500/90 dark:text-slate-400 font-normal max-w-2xl mb-8 sm:mb-10 leading-[1.8] transition-colors">
          Sou <span className="text-slate-800 dark:text-white font-medium">Ranyeri Klennes</span>, Desenvolvedor Fullstack. Pode esquecer o &quot;tecniquês&quot; complicado: meu objetivo é fazer a tecnologia trabalhar por você, não importa quem você seja. Com um olhar cirúrgico para os detalhes e muita empatia, pego aqueles processos chatos do cotidiano e transformo em facilidade. É tecnologia feita por gente, para ajudar gente.
        </p>

        <div className="mb-10 sm:mb-12 pl-6 italic text-sm sm:text-base text-slate-400/80 dark:text-slate-500 max-w-xl leading-relaxed font-light tracking-wide">
          A verdadeira inteligência não é usar um canhão contra uma formiga. É entregar a solução no tamanho exato do problema: simples, ágil e cirurgicamente bem-feita.
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
          <a href="#projetos" className="bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            Explorar Portfólio
            <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <div className="flex gap-2">
            <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="p-3.5 sm:p-4 bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white backdrop-blur-sm shadow-sm">
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="p-3.5 sm:p-4 bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all text-slate-700 dark:text-slate-300 hover:text-blue-600 backdrop-blur-sm shadow-sm">
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/6.3] lg:aspect-[4/6.3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/30 float-anim">
        <img src="/minha-foto-3.jpeg" alt="Ranyeri Klennes" className={`w-full h-full object-cover object-top transition-opacity duration-[1500ms] ${isDark ? 'opacity-0' : 'opacity-100'}`} loading="eager" />
        <img src="/minha-foto-2.jpeg" alt="Ranyeri Klennes" className={`absolute inset-0 w-full h-full object-cover object-[center_25%] transition-opacity duration-[1500ms] ${isDark ? 'opacity-100' : 'opacity-0'}`} loading="eager" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[2.5rem]"></div>
      </div>
    </div>
  </header>
);
