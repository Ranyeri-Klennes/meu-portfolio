import React from 'react';
import { MailIcon } from '../Icons';

export const Footer = () => (
  <footer id="contato" className="pt-16 pb-8 sm:pt-32 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center reveal">
    <div className="glass-premium dark:bg-slate-800 rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 relative overflow-hidden dark:border dark:border-slate-600/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10 pointer-events-none"></div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 relative z-10 text-slate-900 dark:text-white tracking-tight">
        Vamos construir algo<br /><span className="text-gradient">incrível juntos?</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 max-w-md mx-auto relative z-10 font-medium text-sm sm:text-base">
        Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me mandar um email.
      </p>
      <a href="mailto:ranyeri.klennes@gmail.com" className="relative z-10 inline-flex items-center gap-2 sm:gap-3 bg-slate-900 dark:bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-slate-900/20 dark:shadow-blue-900/30 text-sm sm:text-base break-all sm:break-normal">
        <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        ranyeri.klennes@gmail.com
      </a>
    </div>
    <div className="mt-10 sm:mt-16 text-slate-500 dark:text-slate-500 text-sm font-medium flex flex-col sm:flex-row justify-between items-center gap-4 px-2 sm:px-8">
      <p>© 2026 Ranyeri Klennes. Todos os direitos reservados.</p>
      <div className="flex gap-6">
        <a href="https://linkedin.com/in/ranyeri-klennes" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com/Ranyeri-Klennes" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);
