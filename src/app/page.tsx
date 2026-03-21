'use client';

import React, { useState, useEffect } from 'react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll reveal
      const reveals = document.querySelectorAll<HTMLElement>('.reveal');
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-body bg-gradient-to-br from-[#f0f4ff] via-[#f8fafc] to-[#f1f5f9] relative antialiased overflow-x-hidden">

      {/* SVG Liquid Refraction Filter */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="liquid-refraction">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </svg>

      {/* ── AURORA BACKGROUND ── */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="bg-shape w-96 h-96 bg-blue-300/30 rounded-full top-[-10%] left-[-10%]"></div>
        <div className="bg-shape w-[500px] h-[500px] bg-purple-200/40 rounded-full bottom-[20%] right-[-10%]" style={{ animationDelay: '-5s' }}></div>
        <div className="bg-shape w-72 h-72 bg-emerald-200/30 rounded-full top-[40%] left-[20%]" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* ── NAV ── */}
      <nav className={`fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300`}>
        <div className="max-w-5xl mx-auto glass-premium rounded-[2rem] px-5 sm:px-8 py-3 sm:py-4 flex justify-between items-center relative">
          <div className="font-black text-xl sm:text-2xl tracking-tighter text-slate-900">
            RK<span className="text-blue-600">.</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold text-slate-600">
            <a href="#inicio" className="hover:text-slate-900 transition-colors">Início</a>
            <a href="#bento" className="hover:text-slate-900 transition-colors">Sobre</a>
            <a href="#stack" className="hover:text-slate-900 transition-colors">Stacks</a>
            <a href="#projetos" className="hover:text-slate-900 transition-colors">Projetos</a>
          </div>

          <a href="#contato" className="hidden md:inline-flex bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:scale-105 transition-all">
            Fale Comigo
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100/50 rounded-xl transition"
          >
            <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-5 flex flex-col gap-3 md:hidden shadow-2xl z-[60]">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100 hover:text-blue-600 transition">Início</a>
              <a href="#bento" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100 hover:text-blue-600 transition">Sobre</a>
              <a href="#stack" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100 hover:text-blue-600 transition">Stacks</a>
              <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100 hover:text-blue-600 transition">Projetos</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mt-1 bg-slate-900 text-white px-5 py-3 rounded-full font-bold text-center hover:bg-blue-600 transition">Fale Comigo</a>
            </div>
          )}
        </div>
      </nav>

      {/* ── HERO ── */}
      <header id="inicio" className="relative min-h-[90vh] flex items-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto reveal active">
        <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div className="flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold mb-7 sm:mb-8 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Disponível para novos desafios
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5 sm:mb-6 tracking-tighter text-slate-900">
              Construindo o futuro<br />com <span className="furta-cor">Dados</span> e<br />Automação.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-8 sm:mb-10 leading-relaxed font-medium">
              Sou <span className="text-slate-900 font-bold">Ranyeri Klennes</span>, Desenvolvedor Fullstack com foco em Data Science. Transformo gargalos complexos em soluções elegantes.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <a href="#projetos" className="bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all text-sm sm:text-base">
                Explorar Portfólio
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </a>
              <div className="flex gap-2">
                <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="p-3.5 sm:p-4 bg-white/60 border border-white/80 rounded-full hover:bg-white hover:-translate-y-0.5 transition-all text-slate-700 hover:text-slate-900 backdrop-blur-sm shadow-sm">
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="p-3.5 sm:p-4 bg-white/60 border border-white/80 rounded-full hover:bg-white hover:-translate-y-0.5 transition-all text-slate-700 hover:text-blue-600 backdrop-blur-sm shadow-sm">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 float-anim">
            <img
              src="/minha-foto-3.jpeg"
              alt="Ranyeri Klennes"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]"></div>
          </div>
        </div>
      </header>

      {/* ── BENTO (Sobre + Stats) ── */}
      <section id="bento" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto reveal">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 tracking-tight text-slate-900">Minha Jornada</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" style={{ gridAutoRows: '220px' }}>

          {/* Main card – span 2 cols × 2 rows */}
          <div className="bento-card glass-premium rounded-[2rem] p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden sm:col-span-2 sm:row-span-2">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            <div>
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-blue-600 mb-4 sm:mb-6 block">psychology</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Visão Analítica & Código Limpo</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                Com 3 anos de experiência em engenharia de software e foco em soluções baseadas em dados. Graduado em ADS e pós-graduado em Data Science. Minha paixão é utilizar inteligência analítica para otimizar negócios.
              </p>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-slate-500 font-semibold italic border-l-2 border-blue-500 pl-4">
                &quot;Busco sempre a interseção entre o processamento robusto e a automação escalável.&quot;
              </p>
            </div>
          </div>

          {/* Stat 1 */}
          <div className="bento-card glass-premium rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-1 sm:mb-2">3<span className="text-blue-600">+</span></div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">Anos Exp.</div>
          </div>

          {/* Stat 2 */}
          <div className="bento-card glass-premium rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-1 sm:mb-2">10<span className="text-blue-600">+</span></div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">Projetos</div>
          </div>

          {/* Formação card – span 2 cols */}
          <div className="bento-card sm:col-span-2 bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-white flex justify-between items-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none"></div>
            <div className="z-10">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4 inline-block">Formação Elite</span>
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Data Science & ADS</h4>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xs">Pós-Graduação e Graduação conectando teoria acadêmica (UFPE) à prática de mercado.</p>
            </div>
            <span className="material-symbols-outlined text-6xl sm:text-7xl text-white/10 rotate-12 z-10">school</span>
          </div>

        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="py-20 sm:py-32 px-4 sm:px-6 mt-4 sm:mt-12 bg-slate-950 text-white rounded-[2rem] sm:rounded-[3rem] max-w-[96%] mx-auto reveal relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4">Arsenal Tecnológico</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">Ferramentas que utilizo para transformar complexidade em performance.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">

            {/* Data Science */}
            <div className="glass-dark stack-card-blue p-7 sm:p-10 rounded-[2rem] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-blue-400 text-xl sm:text-2xl">insights</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ciência de Dados</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">Python</span>
                <span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">Data Viz</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Extração de valor e insights estratégicos para modelagem de negócios.</p>
            </div>

            {/* Backend */}
            <div className="glass-dark stack-card-purple p-7 sm:p-10 rounded-[2rem] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-400 text-xl sm:text-2xl">dns</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Backend & APIs</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">C# .NET</span>
                <span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">SQL</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Arquiteturas escaláveis, integrações complexas e sistemas robustos.</p>
            </div>

            {/* Automação */}
            <div className="glass-dark stack-card-orange p-7 sm:p-10 rounded-[2rem] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-orange-400 text-xl sm:text-2xl">smart_toy</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Automação</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">Dart</span>
                <span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">Scrapers</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Engenharia de produtividade para automatizar rotinas massivas e repetitivas.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section id="projetos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden reveal">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-slate-900">Projetos em Destaque</h2>
        <div className="w-full pause-on-hover">
          <div className="flex w-max animate-scroll py-6 sm:py-8">
            {[1, 2, 3].map((key) => (
              <React.Fragment key={key}>
                {[
                  { t: "Automatizando-Job", i: "smart_toy", l: "Python", c: "bg-green-100/80", tx: "text-green-700" },
                  { t: "SmartSchool", i: "school", l: "C# / .NET", c: "bg-indigo-100/80", tx: "text-indigo-700" },
                  { t: "Migles", i: "diversity_3", l: "Dart", c: "bg-blue-100/80", tx: "text-blue-700" }
                ].map((p, idx) => (
                  <div key={idx} className="w-[280px] sm:w-[320px] h-[320px] sm:h-[350px] mx-3 sm:mx-4 group relative glass-card rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-20 shrink-0 flex flex-col">
                    <div className="h-44 sm:h-56 bg-gradient-to-br from-slate-100/60 to-slate-200/30 flex items-center justify-center overflow-hidden relative border-b border-white/50">
                      <span className="material-symbols-outlined text-5xl sm:text-6xl text-slate-300 group-hover:scale-125 group-hover:text-blue-500 transition duration-500">{p.i}</span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">{p.t}</h3>
                        <span className={`text-[10px] ${p.c} backdrop-blur-md ${p.tx} px-2 py-1 rounded-full font-bold shrink-0`}>{p.l}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">Repositório dedicado à inovação e otimização técnica.</p>
                      <div className="flex justify-end items-center mt-auto">
                        <a href="#" className="p-2 rounded-xl bg-white/60 hover:bg-white transition shadow-sm border border-white/80">
                          <span className="material-symbols-outlined text-slate-700 text-sm">north_east</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTÓRICO ── */}
      <section className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6 reveal">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-slate-900">Histórico Profissional</h2>
        <div className="space-y-10 sm:space-y-12">
          <div className="relative pl-7 sm:pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-2 top-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
            </div>
            <span className="text-xs font-bold text-blue-600 mb-2 block tracking-widest">2022 - PRESENTE</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Fullstack Developer</h3>
            <p className="text-sm text-slate-500">Fade-UFPE</p>
          </div>
          <div className="relative pl-7 sm:pl-8 border-l-2 border-slate-200">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200"></div>
            <span className="text-xs font-bold text-slate-400 mb-2 block tracking-widest">2023</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Especialização em Data Science</h3>
            <p className="text-sm text-slate-500">Pós-Graduação</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER / CONTATO ── */}
      <footer id="contato" className="py-16 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto text-center reveal">
        <div className="glass-premium rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 pointer-events-none"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 relative z-10 text-slate-900 tracking-tight">
            Vamos construir algo<br /><span className="text-gradient">incrível juntos?</span>
          </h2>
          <p className="text-slate-600 mb-8 sm:mb-10 max-w-md mx-auto relative z-10 font-medium text-sm sm:text-base">
            Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me mandar um email.
          </p>
          <a
            href="mailto:ranyeri.klennes@gmail.com"
            className="relative z-10 inline-flex items-center gap-2 sm:gap-3 bg-slate-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-900/20 text-sm sm:text-base break-all sm:break-normal"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">mail</span>
            ranyeri.klennes@gmail.com
          </a>
        </div>

        <div className="mt-10 sm:mt-16 text-slate-500 text-sm font-medium flex flex-col sm:flex-row justify-between items-center gap-4 px-2 sm:px-8">
          <p>© 2026 Ranyeri Klennes. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/ranyeri-klennes" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="https://github.com/Ranyeri-Klennes" className="hover:text-slate-900 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
