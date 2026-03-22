import React from 'react';
import { LayersIcon, RocketIcon, ShieldCheckIcon } from '../Icons';

export const Stack = () => (
  <section id="stack" className="py-20 sm:py-32 px-4 sm:px-6 mt-4 sm:mt-12 bg-white/60 backdrop-blur-2xl dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2rem] sm:rounded-[3rem] max-w-[96%] mx-auto reveal relative overflow-hidden shadow-2xl border border-white/80 dark:border-slate-600/50">
    <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-30"></div>
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4">Arsenal Tecnológico</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg">Ferramentas que utilizo para transformar complexidade em performance.</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        <div className="glass-dark stack-card-blue p-7 sm:p-10 rounded-[2rem] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-700 ease-out group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-500">
            <LayersIcon className="text-blue-600 dark:text-blue-400 w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Full Stack Adaptável</h3>
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            <span className="border border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">C# .NET</span>
            <span className="border border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">TypeScript</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Construção de soluções end-to-end com rápida adaptação a diferentes ecossistemas e tecnologias.</p>
        </div>
        <div className="glass-dark stack-card-purple p-7 sm:p-10 rounded-[2rem] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-700 ease-out group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-purple-500/20 transition-all duration-500">
            <RocketIcon className="text-purple-600 dark:text-purple-400 w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Automação &amp; CI/CD</h3>
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            <span className="border border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">Python</span>
            <span className="border border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">FastAPI</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Otimização de fluxos de trabalho, integração de sistemas e criação de esteiras de deploy contínuo.</p>
        </div>
        <div className="glass-dark stack-card-orange p-7 sm:p-10 rounded-[2rem] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-700 ease-out group sm:col-span-2 md:col-span-1">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-500">
            <ShieldCheckIcon className="text-emerald-600 dark:text-emerald-400 w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Qualidade &amp; Cultura Ágil</h3>
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            <span className="border border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">Clean Code</span>
            <span className="border border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">SCRUM</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Foco em segurança, código limpo, manutenibilidade e entregas contínuas de valor.</p>
        </div>
      </div>
    </div>
  </section>
);
