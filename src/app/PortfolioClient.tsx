'use client';

import React, { useState, useEffect, useRef } from 'react';

// ── TYPES ──
export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  image: string | null;
};

type Props = {
  publicRepos: number;
  bio: string | null;
  repos: GitHubRepo[];
};

// ── ICONS ──
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
const SunIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7,7 17,7 17,17" />
  </svg>
);
const MenuIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const SchoolIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10L12 5L2 10L12 15L22 10Z"/><path d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12"/><path d="M22 10V18"/>
  </svg>
);
const ChartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const BotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
  </svg>
);
const CodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

// ── LANGUAGE COLOR MAP ──
const langColor: Record<string, { bg: string; text: string }> = {
  Python:     { bg: 'bg-yellow-100/80 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400' },
  TypeScript: { bg: 'bg-blue-100/80 dark:bg-blue-900/30',   text: 'text-blue-700 dark:text-blue-400' },
  JavaScript: { bg: 'bg-amber-100/80 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
  'C#':       { bg: 'bg-indigo-100/80 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-400' },
  Dart:       { bg: 'bg-cyan-100/80 dark:bg-cyan-900/30',   text: 'text-cyan-700 dark:text-cyan-400' },
  default:    { bg: 'bg-slate-100/80 dark:bg-slate-800/50', text: 'text-slate-600 dark:text-slate-400' },
};

// ── THEME TOGGLE ──
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full p-1.5 transition-all duration-[1200ms] outline-none border-none ${
      isDark
        ? 'bg-[#1e293b] shadow-[inset_4px_4px_10px_#0f172a,inset_-4px_-4px_10px_#2d3748]'
        : 'bg-[#f0f4ff] shadow-[inset_4px_4px_10px_#d1d9e6,inset_-4px_-4px_12px_#ffffff]'
    }`}
    aria-label="Alternar tema"
  >
    <div className={`w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center transition-all duration-[1200ms] transform ${
      isDark
        ? 'translate-x-7 sm:translate-x-8 bg-[#1e293b] shadow-[4px_4px_8px_#0f172a,-4px_-4px_12px_#2d3748]'
        : 'translate-x-0 bg-[#f0f4ff] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_12px_#ffffff]'
    }`}>
      {isDark
        ? <MoonIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
        : <SunIcon  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500/80 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />}
    </div>
  </button>
);

// ── MAIN CLIENT COMPONENT ──
export default function PortfolioClient({ publicRepos, bio, repos }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const initialDark = stored === 'dark';
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      const lastScrollY = lastScrollYRef.current;
      if (currentScrollY > heroHeight) {
        if (currentScrollY > lastScrollY) setShowNavbar(false);
        else if (lastScrollY - currentScrollY > 50) setShowNavbar(true);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = currentScrollY;
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    const audio = new Audio(newDark ? '/switch-on.mp3' : '/switch-off.mp3');
    audio.play().catch(() => {});
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-body bg-gradient-to-b from-[#f0f4ff] via-[#f8fafc] to-[#f0f4ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] relative antialiased transition-colors duration-[1500ms]">

      {/* SVG Liquid Refraction Filter */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="liquid-refraction">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves={2} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={4} />
        </filter>
      </svg>

      {/* ── AURORA BACKGROUND ── */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="bg-shape w-96 h-96 bg-blue-300/30 dark:bg-blue-700/20 rounded-full top-[-10%] left-[-10%]"></div>
        <div className="bg-shape w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-800/15 rounded-full bottom-[20%] right-[-10%]" style={{ animationDelay: '-5s' }}></div>
        <div className="bg-shape w-72 h-72 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full top-[40%] left-[20%]" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* ── TOP HOVER TRIGGER ── */}
      <div onMouseEnter={() => setShowNavbar(true)} className="fixed top-0 left-0 right-0 h-4 z-[60] pointer-events-auto" />

      {/* ── NAV ── */}
      <nav className={`fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300 transform ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-5xl mx-auto glass-premium rounded-[2rem] px-5 sm:px-8 py-3 sm:py-4 flex justify-between items-center relative">
          <div className="font-black text-xl sm:text-2xl tracking-tighter text-slate-900 dark:text-white">
            RK<span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <a href="#inicio" className="hover:text-slate-900 dark:hover:text-white transition-colors">Início</a>
            <a href="#bento" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sobre</a>
            <a href="#stack" className="hover:text-slate-900 dark:hover:text-white transition-colors">Stacks</a>
            <a href="#projetos" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projetos</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <a href="#contato" className="hidden md:inline-flex bg-slate-900 dark:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-105 transition-all">
              Fale Comigo
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex items-center justify-center p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-xl transition ml-2">
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-100 dark:border-slate-800 rounded-2xl p-5 flex flex-col gap-3 md:hidden shadow-2xl z-[60]">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 dark:text-slate-300 py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 transition">Início</a>
              <a href="#bento" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 dark:text-slate-300 py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 transition">Sobre</a>
              <a href="#stack" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 dark:text-slate-300 py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 transition">Stacks</a>
              <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 dark:text-slate-300 py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 transition">Projetos</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mt-1 bg-slate-900 dark:bg-blue-600 text-white px-5 py-3 rounded-full font-bold text-center hover:bg-blue-600 dark:hover:bg-blue-500 transition">Fale Comigo</a>
            </div>
          )}
        </div>
      </nav>

      {/* ── HERO ── */}
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

          {/* Photo */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/6.3] lg:aspect-[4/6.3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/30 float-anim">
            <img src="/minha-foto-3.jpeg" alt="Ranyeri Klennes" className={`w-full h-full object-cover object-top transition-opacity duration-[1500ms] ${isDark ? 'opacity-0' : 'opacity-100'}`} loading="eager" />
            <img src="/minha-foto-2.jpeg" alt="Ranyeri Klennes" className={`absolute inset-0 w-full h-full object-cover object-[center_25%] transition-opacity duration-[1500ms] ${isDark ? 'opacity-100' : 'opacity-0'}`} loading="eager" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[2.5rem]"></div>
          </div>
        </div>
      </header>

      {/* ── BENTO (Sobre + Stats) ── */}
      <section id="bento" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto reveal">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 tracking-tight text-slate-900 dark:text-white">Minha Jornada</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" style={{ gridAutoRows: '220px' }}>

          {/* Main card */}
          <div className="bento-card glass-premium rounded-[2rem] p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden sm:col-span-2 sm:row-span-2">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/><path d="M6 21a3 3 0 0 1 3-3h6"/><path d="M6 3a3 3 0 0 1 3 3h6"/><path d="M9 18V6"/><path d="M6 21a3 3 0 0 0-3-3V6a3 3 0 0 0 3-3"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">Visão Analítica &amp; Código Limpo</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm sm:text-base">
                {bio ?? 'Com 3 anos de experiência em engenharia de software e foco em soluções baseadas em dados. Graduado em ADS e pós-graduado em Data Science.'}
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
            <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2"><span className="text-blue-600 dark:text-blue-400">+</span>50</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">Processos Otimizados</div>
          </div>

          {/* Stat 2 — GitHub public_repos */}
          <div className="bento-card glass-premium rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">
              <span className="text-blue-600 dark:text-blue-400">+</span>{publicRepos}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">Projetos</div>
          </div>

          {/* Formação */}
          <div className="bento-card sm:col-span-2 bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 text-white flex justify-between items-center overflow-hidden relative border border-slate-700/50 dark:border-slate-600/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none"></div>
            <div className="z-10">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4 inline-block">Formação Elite</span>
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Data Science &amp; ADS</h4>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xs">Pós-Graduação e Graduação conectando teoria acadêmica (UFPE) à prática de mercado.</p>
            </div>
            <SchoolIcon className="w-16 h-16 sm:w-20 sm:h-20 text-white/10 -rotate-12 z-10 shrink-0" />
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="py-20 sm:py-32 px-4 sm:px-6 mt-4 sm:mt-12 bg-slate-950 dark:bg-slate-800 text-white rounded-[2rem] sm:rounded-[3rem] max-w-[96%] mx-auto reveal relative overflow-hidden shadow-2xl border border-slate-700/50 dark:border-slate-600/50">
        <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4">Arsenal Tecnológico</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">Ferramentas que utilizo para transformar complexidade em performance.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="glass-dark stack-card-blue p-7 sm:p-10 rounded-[2rem] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChartIcon className="text-blue-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ciência de Dados</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="border border-white/10 dark:border-slate-700 bg-white/5 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">Python</span>
                <span className="border border-white/10 dark:border-slate-700 bg-white/5 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">Data Viz</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Extração de valor e insights estratégicos para modelagem de negócios.</p>
            </div>
            <div className="glass-dark stack-card-purple p-7 sm:p-10 rounded-[2rem] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <DatabaseIcon className="text-purple-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Backend &amp; APIs</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="border border-white/10 dark:border-slate-700 bg-white/5 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">C# .NET</span>
                <span className="border border-white/10 dark:border-slate-700 bg-white/5 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">SQL</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Arquiteturas escaláveis, integrações complexas e sistemas robustos.</p>
            </div>
            <div className="glass-dark stack-card-orange p-7 sm:p-10 rounded-[2rem] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BotIcon className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Automação</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="border border-white/10 dark:border-slate-700 bg-white/5 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">Dart</span>
                <span className="border border-white/10 dark:border-slate-700 bg-white/5 dark:bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-semibold">Scrapers</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Engenharia de produtividade para automatizar rotinas massivas e repetitivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETOS (GitHub) ── */}
      <section id="projetos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden reveal">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-slate-900 dark:text-white">Projetos em Destaque</h2>
        <div className="w-full pause-on-hover">
          <div className="flex w-max animate-scroll py-6 sm:py-8">
            {[1, 2].map((key) => (
              <React.Fragment key={key}>
                {repos.map((repo, idx) => {
                  const lang = repo.language ?? 'default';
                  const colors = langColor[lang] ?? langColor.default;
                  return (
                    <div key={`${key}-${idx}`} className="w-[280px] sm:w-[320px] h-[320px] sm:h-[360px] mx-3 sm:mx-4 group relative glass-card dark:bg-slate-800/80 dark:border-slate-700/50 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:z-20 shrink-0 flex flex-col">
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
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTÓRICO ── */}
      <section className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6 reveal">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-slate-900 dark:text-white">Histórico Profissional</h2>
        <div className="space-y-10 sm:space-y-12">
          <div className="relative pl-7 sm:pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-2 top-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
            </div>
            <span className="text-xs font-bold text-blue-600 mb-2 block tracking-widest">2022 - PRESENTE</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Fullstack Developer</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Fade-UFPE</p>
          </div>
          <div className="relative pl-7 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-xs font-bold text-slate-400 mb-2 block tracking-widest">2023</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Especialização em Data Science</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Pós-Graduação</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER / CONTATO ── */}
      <footer id="contato" className="pt-16 pb-8 sm:pt-32 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center reveal">
        <div className="glass-premium rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 relative overflow-hidden border border-white/80 dark:border-white/5">
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

    </div>
  );
}
