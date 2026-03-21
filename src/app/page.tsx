'use client';

import React, { useState, useEffect } from 'react';

// Componente SVG para garantir que o ícone do LinkedIn apareça sempre
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] relative">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-320px * 3 - 2rem * 3)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .dark-glass-card {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm border-b border-white/40' : ''}`}>
        <div className="max-w-7xl mx-auto rounded-2xl px-8 py-3 flex justify-between items-center relative">
          <div className="font-extrabold text-2xl tracking-tight flex-shrink-0 text-slate-900">RK<span className="text-blue-600">.</span></div>
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-sm font-semibold text-slate-600">
              <a href="#inicio" className="relative group hover:text-blue-600 transition">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#sobre" className="relative group hover:text-blue-600 transition">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#habilidades" className="relative group hover:text-blue-600 transition">
                Stacks
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projetos" className="relative group hover:text-blue-600 transition">
                Projetos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </div>
            <a href="#contato" className="bg-blue-600/90 backdrop-blur-md text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg hover:-translate-y-0.5">
              Fale Comigo
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition border border-slate-200">
            <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl z-[60]">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100">Início</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100">Sobre</a>
              <a href="#habilidades" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100">Stacks</a>
              <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-100">Projetos</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mt-2 bg-blue-600/90 backdrop-blur-md text-white px-6 py-4 rounded-xl font-bold text-center">Fale Comigo</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative pt-32 pb-4 lg:pb-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="fade-in-up self-start mt-12 mb-4 lg:mt-6 lg:mb-16 lg:pr-8">
            <div className="inline-flex items-center gap-2 glass-card text-green-700 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              DISPONÍVEL PARA NOVOS DESAFIOS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 text-slate-900">
              Ranyeri <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Klennes</span><br />
              Alves Cavalcante
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-8 lg:mb-10 leading-relaxed">
              Desenvolvedor Fullstack com foco em <span className="font-bold text-slate-900">Data Science</span>. 
              Transformando dados complexos em soluções inovadoras e automações inteligentes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="dark-glass-card text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition shadow-xl hover:-translate-y-1 text-sm sm:text-base">
                Ver Portfólio <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl hover:bg-white/90 transition shadow-sm hover:-translate-y-1">
                  <img src="https://cdn.simpleicons.org/github/0F172A" className="w-5 h-5 sm:w-6 sm:h-6" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl hover:bg-white/90 transition shadow-sm hover:-translate-y-1 text-[#0A66C2]">
                  <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex relative h-full items-start justify-end lg:pt-2">
            <div className="relative z-0 w-[92%] xl:w-[88%] glass-card rounded-[60px] shadow-2xl overflow-hidden float-anim p-2 translate-y-24">
              <img 
                src="/minha-foto.png" 
                className="w-full aspect-[2/3.5] object-cover object-top rounded-[50px]"
                alt="Ranyeri Klennes" 
                loading="eager"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-indigo-400/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Stats Section Overlapping Hero */}
      <section className="max-w-7xl mx-auto px-6 relative z-30 -mt-24 lg:-mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8">
          {[ 
            { v: "3+", l: "Anos Exp." },
            { v: "10+", l: "Repositórios" },
            { v: "Pós", l: "Data Science" },
            { v: "ADS", l: "Graduação" }
          ].map((s, i) => (
            <div key={i} className="glass-card p-6 lg:p-8 rounded-[28px] lg:rounded-[36px] text-center shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[150px]">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-2">{s.v}</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest line-clamp-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-slate-900">Minha Jornada</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Como desenvolvedor full-stack com 3 anos de experiência, tenho implementado soluções complexas, com destaque para minha atuação na <span className="font-bold text-blue-600">Fade-UFPE</span>.</p>
              <p>Graduado em <span className="text-slate-900 font-semibold">Análise e Desenvolvimento de Sistemas</span> e com pós-graduação em <span className="text-slate-900 font-semibold">Ciência de Dados</span>.</p>
              <div className="glass-card border-l-4 border-blue-600 p-4 rounded-r-xl italic shadow-sm">
                "Estou sempre em busca de novas oportunidades para expandir meu conjunto de habilidades."
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="dark-glass-card p-8 rounded-[40px] text-white flex flex-col justify-center shadow-xl hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-blue-400 text-4xl mb-4">school</span>
              <h4 className="font-bold mb-2 text-white">Formação</h4>
              <p className="text-xs text-slate-300">Pós-Graduado em Data Science & ADS pela UFPE.</p>
            </div>
            <div className="glass-card p-8 rounded-[40px] shadow-lg flex flex-col justify-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-indigo-600 text-4xl mb-4">rocket_launch</span>
              <h4 className="font-bold mb-2 text-slate-900">Impacto</h4>
              <p className="text-xs text-slate-500">Focado em automação e escalabilidade.</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 backdrop-blur-xl p-8 rounded-[40px] text-white shadow-xl hover:-translate-y-1 transition-transform border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-white">Especialista Regional</h4>
                <span className="bg-white/20 px-2 py-1 rounded text-[10px] uppercase font-bold text-white">Recife/PE</span>
              </div>
              <p className="text-sm text-white/90">Atuando diretamente no polo tecnológico de Pernambuco.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <span className="material-symbols-outlined text-[20rem]">code</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Stack Tecnológica</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Arsenal focado em performance e automação.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-blue-500/30 transition-all duration-300 bg-[#0a121e] hover:scale-105 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 p-3 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"><img src="https://cdn.simpleicons.org/python/60A5FA" className="w-10 h-10" alt="DS" /></div>
              <h3 className="text-xl font-bold mb-4">Ciência de Dados</h3>
              <p className="text-sm text-slate-400">Insights estratégicos para tomada de decisão.</p>
            </div>
            <div className="p-8 rounded-[32px] border border-indigo-500/30 transition-all duration-300 bg-[#0a121e] hover:scale-105 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 p-3 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors"><img src="https://cdn.simpleicons.org/dotnet/818CF8" className="w-10 h-10" alt="Back" /></div>
              <h3 className="text-xl font-bold mb-4">Backend & C#</h3>
              <p className="text-sm text-slate-400">Sistemas robustos e arquiteturas escaláveis.</p>
            </div>
            <div className="p-8 rounded-[32px] border border-orange-500/30 transition-all duration-300 bg-[#0a121e] hover:scale-105 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 p-3 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors"><img src="https://cdn.simpleicons.org/dart/FB923C" className="w-10 h-10" alt="Auto" /></div>
              <h3 className="text-xl font-bold mb-4">Automação & Dart</h3>
              <p className="text-sm text-slate-400">Ferramentas de produtividade e automação massiva.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <h2 className="text-4xl font-extrabold mb-12 text-slate-900">Projetos em Destaque</h2>
        <div className="w-full pause-on-hover">
          {/* A lógica de pausa foi delegada ao container pai (pause-on-hover) no CSS global */}
          <div className="flex w-max animate-scroll py-8">
            {[1, 2, 3].map((key) => (
              <React.Fragment key={key}>
                {[ 
                  { t: "Automatizando-Job", i: "smart_toy", l: "Python", c: "bg-green-100/80", tx: "text-green-700", s: "python/3776AB" },
                  { t: "SmartSchool", i: "school", l: "C# / .NET", c: "bg-indigo-100/80", tx: "text-indigo-700", s: "dotnet/512BD4" },
                  { t: "Migles", i: "diversity_3", l: "Dart", c: "bg-blue-100/80", tx: "text-blue-700", s: "dart/0175C2" }
                ].map((p, idx) => (
                  <div key={idx} className="w-[320px] h-[350px] mx-4 group relative glass-card rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:z-20 shrink-0 flex flex-col">
                    <div className="h-56 bg-gradient-to-br from-slate-100/60 to-slate-200/30 flex items-center justify-center overflow-hidden relative border-b border-white/50">
                      <img src={`https://cdn.simpleicons.org/${p.s}`} className="w-16 h-16 opacity-10 absolute" alt="Bg" />
                      <span className="material-symbols-outlined text-6xl text-slate-400 group-hover:scale-125 group-hover:text-blue-500 transition duration-500">{p.i}</span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-slate-900 truncate">{p.t}</h3>
                        <span className={`text-[10px] ${p.c} backdrop-blur-md ${p.tx} px-2 py-1 rounded font-bold shrink-0`}>{p.l}</span>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">Repositório dedicado à inovação e otimização técnica.</p>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex gap-2"><span className="material-symbols-outlined text-slate-400 text-sm">star</span></div>
                        <a href="#" className="p-2 rounded-xl bg-white/60 hover:bg-white transition shadow-sm border border-white">
                          <span className="material-symbols-outlined text-slate-900 text-sm">link</span>
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

      <section className="py-24 bg-white shadow-inner">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Histórico Profissional</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-2 top-0 flex h-4 w-4"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span></div>
              <span className="text-xs font-bold text-blue-600 mb-2 block tracking-widest">2022 - PRESENTE</span>
              <h3 className="text-xl font-bold text-slate-900">Fullstack Developer</h3>
              <p className="text-sm text-slate-500">Fade-UFPE</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200"></div>
              <span className="text-xs font-bold text-slate-400 mb-2 block tracking-widest">2023</span>
              <h3 className="text-xl font-bold text-slate-900">Especialização em Data Science</h3>
              <p className="text-sm text-slate-500">Pós-Graduação</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="pt-24 pb-8 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Vamos construir algo <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">incrível</span>?</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:ranyeri.klennes@gmail.com" className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-blue-400">mail</span>
              <span className="font-semibold text-sm text-white">ranyeri.klennes@gmail.com</span>
            </a>
          </div>
          <div className="pt-6 border-t border-white/10 flex justify-between items-center">
            <div className="text-slate-500 text-sm">© 2026 Ranyeri Klennes.</div>
            <a href="https://github.com/Ranyeri-Klennes" className="text-slate-500 hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
