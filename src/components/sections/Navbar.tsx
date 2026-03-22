import React from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { MenuIcon, CloseIcon } from '../Icons';

type NavbarProps = {
  showNavbar: boolean;
  isDark: boolean;
  isMenuOpen: boolean;
  toggleTheme: () => void;
  setIsMenuOpen: (open: boolean) => void;
};

export const Navbar = ({ showNavbar, isDark, isMenuOpen, toggleTheme, setIsMenuOpen }: NavbarProps) => (
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
);
