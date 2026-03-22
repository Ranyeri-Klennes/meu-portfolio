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
  contributions: number;
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

const LayersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m2.6 11.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9"/><path d="m2.6 16.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9"/></svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c2 0 3 0 3 0"/><path d="M15 9V4s-1 .5-4 1c0 2 0 3 0 3"/></svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
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

// ── COLLAGE ITEM ──
type CollageItemProps = {
  src: string;
  type: 'image' | 'video';
  rotation: string;
  top: string;
  left: string;
  width: string;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

const CollageItem = ({ src, type, rotation, top, left, width, dimmed, onHoverStart, onHoverEnd }: CollageItemProps) => {
  const [hovered, setHovered] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleEnter = () => { setHovered(true); onHoverStart(); videoRef.current?.play(); };
  const handleLeave = () => {
    setHovered(false); onHoverEnd();
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        top, left, width,
        transform: hovered
          ? `rotate(${rotation}) scale(2.5)`
          : `rotate(${rotation}) scale(1)`,
        zIndex: hovered ? 9999 : dimmed ? 0 : 1,
        opacity: dimmed ? 0.15 : 1,
        transition:
          'top 2.2s cubic-bezier(0.2, 0.8, 0.2, 1), left 2.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease, box-shadow 0.6s ease',
      }}
      className={`absolute bg-white dark:bg-zinc-100 cursor-pointer rounded-sm ${
        hovered ? 'shadow-[0_45px_120px_rgba(0,0,0,0.6)] ring-1 ring-white/20' : 'shadow-[0_5px_20px_rgba(0,0,0,0.22)]'
      }`}
    >
      <div className="overflow-hidden" style={{ padding: '3px 3px 0 3px' }}>
        {type === 'video' ? (
          <video ref={videoRef} src={src} muted loop playsInline className="block w-full aspect-[4/3] object-cover" />
        ) : (
          <img src={src} alt="" className="block w-full aspect-[4/3] object-cover" loading="lazy" />
        )}
      </div>
      <div style={{ height: '14px' }} />
    </div>
  );
};

// ── STORY COLLAGE: pool + slots + shuffle ──
const ALL_COLLAGE: Array<{ src: string; type: 'image' | 'video' }> = [
  { src: '/story-collage (1).jpg',  type: 'image' },
  { src: '/story-collage (2).jpg',  type: 'image' },
  { src: '/story-collage (3).jpg',  type: 'image' },
  { src: '/story-collage (4).jpg',  type: 'image' },
  { src: '/story-collage (5).jpg',  type: 'image' },
  { src: '/story-collage (6).jpg',  type: 'image' },
  { src: '/story-collage (7).png',  type: 'image' },
  { src: '/story-collage (8).jpg',  type: 'image' },
  { src: '/story-collage (9).png',  type: 'image' },
  { src: '/story-collage (1).mp4',  type: 'video' },
  { src: '/story-collage (2).mp4',  type: 'video' },
  { src: '/story-collage (3).mp4',  type: 'video' },
  { src: '/story-collage (4).mp4',  type: 'video' },
  { src: '/story-collage (6).mp4',  type: 'video' },
  { src: '/story-collage (8).mp4',  type: 'video' },
  { src: '/story-collage (9).mp4',  type: 'video' },
];

function genAllPositions() {
  const indices = Array.from({ length: 16 }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return ALL_COLLAGE.map((_, idx) => {
    const slot = indices[idx];
    const row = Math.floor(slot / 4);
    const col = slot % 4;

    // Grid centralizado: top 20%->72%, left 5%->73%
    const rowHeight = 52 / 4;
    const colWidth  = 68 / 4;

    const baseTop  = 20 + row * rowHeight;
    const baseLeft = 5  + col * colWidth;

    const jitterTop  = (Math.random() - 0.5) * 8;
    const jitterLeft = (Math.random() - 0.5) * 8;

    return {
      top:      `${Math.max(15, Math.min(72, baseTop + jitterTop))}%`,
      left:     `${Math.max(2,  Math.min(73, baseLeft + jitterLeft))}%`,
      rotation: `${((Math.random() - 0.5) * 32).toFixed(1)}deg`,
    };
  });
}

const StoryCollage = () => {
  const [positions, setPositions] = React.useState(() => genAllPositions());
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const pausedRef = React.useRef(false);

  React.useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setPositions(genAllPositions());
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {ALL_COLLAGE.map((item, i) => (
        <CollageItem
          key={i}
          src={item.src}
          type={item.type}
          rotation={positions[i]?.rotation ?? '0deg'}
          top={positions[i]?.top ?? '0%'}
          left={positions[i]?.left ?? '0%'}
          width="27%"
          dimmed={hoveredIdx !== null && hoveredIdx !== i}
          onHoverStart={() => { pausedRef.current = true; setHoveredIdx(i); }}
          onHoverEnd={() => { pausedRef.current = false; setHoveredIdx(null); }}
        />
      ))}
    </>
  );
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
export default function PortfolioClient({ publicRepos, bio, contributions, repos }: Props) {
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

          {/* Main card — Story Collage */}
          <div className="bento-card glass-premium dark:bg-slate-800 rounded-[2rem] flex flex-col justify-between relative overflow-hidden sm:col-span-2 sm:row-span-2 min-h-[440px] dark:border dark:border-slate-600/50">
            {/* Collage layer */}
            <StoryCollage />

            {/* Label moderno */}
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

      {/* ── STACK ── */}
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

      {/* ── PROJETOS (GitHub) ── */}
      <section id="projetos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 reveal relative group/carousel overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-slate-900 dark:text-white">Projetos em Destaque</h2>
        
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
                {repos.map((repo, idx) => {
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

    </div>
  );
}
