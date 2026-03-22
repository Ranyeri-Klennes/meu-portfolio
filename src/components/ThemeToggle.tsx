import React from 'react';
import { MoonIcon, SunIcon } from './Icons';

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => (
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
