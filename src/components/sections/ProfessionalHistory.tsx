import React from 'react';
import { SchoolIcon } from '../Icons';

export const ProfessionalHistory = () => (
  <section className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6 reveal">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-slate-900 dark:text-white">Histórico Profissional</h2>
    <div className="space-y-10 sm:space-y-12">

      {/* Experiência 1 — atual */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-blue-600">
        <div className="absolute -left-2 top-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
        </div>
        <span className="text-xs font-bold text-blue-600 mb-1 block tracking-widest">MAI 2024 – ATUALMENTE · 1a 11m</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Desenvolvedor .NET | Analista de Desenvolvimento</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Fade-UFPE · Tempo integral · Recife, PE — No local</p>
        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">Referência técnica na modernização de sistemas institucionais, liderando a transição de arquiteturas legadas para soluções modernas, escaláveis e seguras. Desenvolvimento Full Stack, APIs RESTful, SQL Server, Clean Code e Gestão de Requisitos.</p>
      </div>

      {/* Experiência 2 */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <span className="text-xs font-bold text-slate-400 mb-1 block tracking-widest">SET 2023 – JAN 2024 · 5 meses</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Desenvolvedor Full Stack</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Quiz10 · Autônomo · Remoto</p>
        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">Desenvolvimento de plataforma de quiz educativo com sistema de campeonatos e premiações, tornando o aprendizado divertido e desafiador.</p>
      </div>

      {/* Experiência 3 */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <span className="text-xs font-bold text-slate-400 mb-1 block tracking-widest">ABR 2023 – AGO 2023 · 5 meses</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">CFI – Consultoria Financeira Inteligente · Tempo integral · Recife, PE — Híbrido</p>
        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">Desenvolvimento de ERP em Flutter e C# com API REST.</p>
      </div>

      {/* Experiência 4 */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <span className="text-xs font-bold text-slate-400 mb-1 block tracking-widest">MAI 2019 – MAR 2023 · 3a 11m</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Auxiliar Comercial</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Rede Trevo Supermercado · Tempo integral · Recife, PE</p>
        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">Apoio logístico, atendimento a fornecedores, monitoramento de compras, emissão de pedidos e manutenção/automação em planilhas via GCF, email e WhatsApp.</p>
      </div>

      {/* Experiência 5 */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <span className="text-xs font-bold text-slate-400 mb-1 block tracking-widest">OUT 2018 – JUN 2019 · 9 meses</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Guia Turístico</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Anny Tour · Buenos Aires, Argentina</p>
        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">Passeios turísticos por Buenos Aires: zoológicos, espetáculos de tango, city tours e indicações de atrações locais.</p>
      </div>

      {/* Formação 1 */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-indigo-400/50 mt-4">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-400/50 flex items-center justify-center">
          <SchoolIcon className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 mb-1 block tracking-widest">MAI 2023 – NOV 2023</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Faculdade Líbano</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Pós-graduação Stricto Sensu – Mestrado Acadêmico, Ciência de Dados</p>
      </div>

      {/* Formação 2 */}
      <div className="relative pl-7 sm:pl-8 border-l-2 border-indigo-400/50">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-400/50 flex items-center justify-center">
          <SchoolIcon className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 mb-1 block tracking-widest">2019 – 2022</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Faculdade Elo</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Bacharelado, Análise e Desenvolvimento de Sistemas</p>
      </div>

    </div>
  </section>
);
