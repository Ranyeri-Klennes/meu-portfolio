'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { GitHubRepo } from '../../types/portfolio';
import { ProjectCard } from '../ProjectCard';
import { ArrowIcon } from '../Icons';

type ProjectsProps = {
  repos: GitHubRepo[];
};

export const Projects = ({ repos }: ProjectsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const singleWidthRef = useRef(0);

  // Lista de repositórios sem duplicações dentro do mesmo conjunto
  const displayRepos = React.useMemo(() => {
    if (!repos || repos.length === 0) return [];
    return repos;
  }, [repos]);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        singleWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };
    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    let animationFrameId: number;
    const speed = 0.75; // Velocidade suave do auto-scroll

    const loop = () => {
      const singleWidth = singleWidthRef.current;
      if (singleWidth > 0 && !isDraggingRef.current) {
        if (!isHoveredRef.current) {
          targetOffsetRef.current -= speed;
        }

        // Interpolação suave para clique nos botões (lerp)
        offsetRef.current += (targetOffsetRef.current - offsetRef.current) * 0.08;

        // Loop infinito contínuo e sem costuras
        while (offsetRef.current <= -singleWidth) {
          offsetRef.current += singleWidth;
          targetOffsetRef.current += singleWidth;
        }
        while (offsetRef.current > 0) {
          offsetRef.current -= singleWidth;
          targetOffsetRef.current -= singleWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [displayRepos]);

  const handlePrev = () => {
    targetOffsetRef.current += 340;
  };

  const handleNext = () => {
    targetOffsetRef.current -= 340;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragStartOffsetRef.current = targetOffsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    targetOffsetRef.current = dragStartOffsetRef.current + deltaX;
    offsetRef.current = targetOffsetRef.current;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section id="projetos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 reveal relative group/carousel overflow-hidden">
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Projetos em Destaque</h2>
        <Link 
          href="/projetos" 
          className="p-2.5 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm group/link-detail"
          aria-label="Ver todos os projetos detalhados"
        >
          <ArrowIcon className="w-5 h-5 transition-transform group-hover/link-detail:translate-x-0.5" />
        </Link>
      </div>
      
      {/* Setas Laterais Premium */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-[60%] -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 text-slate-800 dark:text-white cursor-pointer select-none"
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-[60%] -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 text-slate-800 dark:text-white cursor-pointer select-none"
        aria-label="Próximo"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      <div 
        ref={containerRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        <div 
          ref={trackRef}
          className="flex w-max py-6 sm:py-8 will-change-transform"
        >
          {displayRepos.map((repo, idx) => (
            <ProjectCard key={`loop1-${idx}`} repo={repo} set={1} idx={idx} />
          ))}
          {displayRepos.map((repo, idx) => (
            <ProjectCard key={`loop2-${idx}`} repo={repo} set={2} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
