'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GitHubRepo } from '../../types/portfolio';
import { Navbar } from '../../components/sections/Navbar';
import { DetailedProjectsList } from '../../components/sections/DetailedProjectsList';
import { Footer } from '../../components/sections/Footer';

type ProjetosClientProps = {
  repos: GitHubRepo[];
};

export default function ProjetosClient({ repos }: ProjetosClientProps) {
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
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollYRef.current) setShowNavbar(false);
        else setShowNavbar(true);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = currentScrollY;
      
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add('active');
        }
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
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4ff] via-[#f8fafc] to-[#f0f4ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] transition-colors duration-[1500ms] relative">
      <Navbar 
        showNavbar={showNavbar} 
        isDark={isDark} 
        isMenuOpen={isMenuOpen} 
        toggleTheme={toggleTheme} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bg-shape w-96 h-96 bg-blue-300/20 dark:bg-blue-700/10 rounded-full top-[-10%] left-[-10%] blur-3xl"></div>
        <div className="bg-shape w-[500px] h-[500px] bg-purple-200/30 dark:bg-purple-800/10 rounded-full bottom-[20%] right-[-10%] blur-3xl" style={{ animationDelay: '-5s' }}></div>
      </div>

      <main className="relative z-10">
        <DetailedProjectsList repos={repos} />
      </main>

      <Footer simple />
    </div>
  );
}
