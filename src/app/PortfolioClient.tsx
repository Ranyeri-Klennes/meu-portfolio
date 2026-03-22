'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PortfolioProps } from '../types/portfolio';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { BentoGrid } from '../components/sections/BentoGrid';
import { Stack } from '../components/sections/Stack';
import { Projects } from '../components/sections/Projects';
import { ProfessionalHistory } from '../components/sections/ProfessionalHistory';
import { Footer } from '../components/sections/Footer';

export default function PortfolioClient({ publicRepos, bio, contributions, repos }: PortfolioProps) {
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
      
      // Ativa animações de revelação conforme o scroll
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
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
    
    // Feedback sonoro opcional
    const audio = new Audio(newDark ? '/switch-on.mp3' : '/switch-off.mp3');
    audio.play().catch(() => {});
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-body bg-gradient-to-b from-[#f0f4ff] via-[#f8fafc] to-[#f0f4ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] relative antialiased transition-colors duration-[1500ms]">

      {/* Camada de Fundo (Aurora) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="bg-shape w-96 h-96 bg-blue-300/30 dark:bg-blue-700/20 rounded-full top-[-10%] left-[-10%]"></div>
        <div className="bg-shape w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-800/15 rounded-full bottom-[20%] right-[-10%]" style={{ animationDelay: '-5s' }}></div>
        <div className="bg-shape w-72 h-72 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full top-[40%] left-[20%]" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* Gatilho invisível para reexibir navbar ao encostar no topo */}
      <div onMouseEnter={() => setShowNavbar(true)} className="fixed top-0 left-0 right-0 h-4 z-[60] pointer-events-auto" />

      <Navbar 
        showNavbar={showNavbar} 
        isDark={isDark} 
        isMenuOpen={isMenuOpen} 
        toggleTheme={toggleTheme} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <main className="max-w-7xl mx-auto">
        <Hero isDark={isDark} />
        
        <BentoGrid 
          contributions={contributions} 
          publicRepos={publicRepos} 
          bio={bio} 
        />

        <Stack />

        <Projects repos={repos} />

        <ProfessionalHistory />
      </main>

      <Footer />
    </div>
  );
}
