'use client';

import React, { useState } from 'react';

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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-8 py-3 flex justify-between items-center shadow-sm relative">
          <div className="font-extrabold text-2xl tracking-tight flex-shrink-0">RK<span className="text-blue-600">.</span></div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-sm font-semibold text-slate-600">
              <a href="#inicio" className="hover:text-blue-600 transition">Início</a>
              <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
              <a href="#habilidades" className="hover:text-blue-600 transition">Stacks</a>
              <a href="#projetos" className="hover:text-blue-600 transition">Projetos</a>
            </div>
            <a href="#contato" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-md shadow-blue-100">
              Fale Comigo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition border border-slate-200"
          >
            <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>

          {/* Mobile Menu Content */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 z-[60]">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-50">Início</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-50">Sobre</a>
              <a href="#habilidades" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-50">Stacks</a>
              <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700 py-2 border-b border-slate-50">Projetos</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mt-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-blue-200">
                Fale Comigo
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative pt-32 pb-4 lg:pb-8 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#f8fafc]"></div>
        </div>

        {/* Ajustado items-center por items-start e gap-12 por gap-8 para subir o texto e diminuir o gap (Ajuste 1 e Adicional) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Bloco de texto redistribuido na coluna */}
          <div className="fade-in-up self-start mt-12 mb-4 lg:mt-6 lg:mb-16 lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              DISPONÍVEL PARA NOVOS DESAFIOS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
              Ranyeri <span className="gradient-text">Klennes</span><br />
              Alves Cavalcante
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-8 lg:mb-10 leading-relaxed">
              Desenvolvedor Fullstack com foco em <span className="font-bold text-slate-900">Data Science</span>. 
              Transformando dados complexos em soluções inovadoras e automações inteligentes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="bg-slate-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition shadow-xl shadow-slate-200 text-sm sm:text-base">
                Ver Portfólio <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass rounded-xl sm:rounded-2xl hover:bg-white transition shadow-sm flex items-center">
                  <img src="https://cdn.simpleicons.org/github/0F172A" className="w-5 h-5 sm:w-6 sm:h-6" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass rounded-xl sm:rounded-2xl hover:bg-white transition shadow-sm flex items-center text-[#0A66C2]">
                  {/* SVG incorporado diretamente para garantir funcionamento e coloração definitiva */}
                  <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>


          </div>

          {/* Container da Foto: Ajustado para mostrar toda a altura vertical e horizontal maior (Ajuste 2) */}
          <div className="hidden lg:flex relative h-full items-start justify-end lg:pt-2">
            {/* Removido max-w-sm e aspect ratio forçado para aumentar a foto e mostrá-la inteira verticalmente (Ajuste 2) */}
            <div className="relative z-10 w-[92%] xl:w-[88%] bg-white rounded-[60px] shadow-2xl overflow-hidden float-anim p-2">
              <img 
                src="/minha-foto.png" 
                className="w-full aspect-[2/2.8] object-cover object-top rounded-[50px] shadow-inner" 
                alt="Ranyeri Klennes" 
                loading="eager"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-purple-400/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Stats Section Overlapping Hero */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 lg:-mt-24 relative z-30">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8">
          <div className="glass p-6 lg:p-8 rounded-[28px] lg:rounded-[36px] text-center shadow-xl shadow-slate-200/50 border-white/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[150px] bg-white/60 backdrop-blur-md">
            <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-2">3+</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest line-clamp-1">Anos Exp.</div>
          </div>
          <div className="glass p-6 lg:p-8 rounded-[28px] lg:rounded-[36px] text-center shadow-xl shadow-slate-200/50 border-white/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[150px] bg-white/60 backdrop-blur-md">
            <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-2">10+</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest line-clamp-1">Repositórios</div>
          </div>
          <div className="glass p-6 lg:p-8 rounded-[28px] lg:rounded-[36px] text-center shadow-xl shadow-slate-200/50 border-white/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[150px] bg-white/60 backdrop-blur-md">
            <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-2">Pós</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest line-clamp-1">Data Science</div>
          </div>
          <div className="glass p-6 lg:p-8 rounded-[28px] lg:rounded-[36px] text-center shadow-xl shadow-slate-200/50 border-white/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[150px] bg-white/60 backdrop-blur-md">
            <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-2">ADS</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest line-clamp-1">Graduação</div>
          </div>
        </div>
      </section>

      {/* Restante das seções permanecem as mesmas */}

      <section id="sobre" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Minha Jornada</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Como desenvolvedor full-stack com 3 anos de experiência, tenho implementado soluções e resolvido problemas complexos nas empresas por onde passei, com destaque para minha atuação na <span className="font-bold text-blue-600">Fade-UFPE</span>.
              </p>
              <p>
                Graduado em <span className="text-slate-900 font-semibold">Análise e Desenvolvimento de Sistemas</span> e com pós-graduação em <span className="text-slate-900 font-semibold">Ciência de Dados</span>, minha paixão é utilizar habilidades analíticas para criar soluções que não apenas funcionam, mas otimizam negócios.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl italic">
                "Estou sempre em busca de novas oportunidades para expandir meu conjunto de habilidades e contribuir em projetos interessantes."
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Corrigido o quadrado escuro: substituído dark-glass por bg-slate-900 sólido para garantir que o texto e o ícone apareçam e adicionado shadow (Ajuste 3) */}
            <div className="bg-slate-900 p-8 rounded-[40px] text-white flex flex-col justify-center shadow-xl">
              <span className="material-symbols-outlined text-blue-300 text-4xl mb-4">school</span>
              <h4 className="font-bold mb-2 text-white">Formação</h4>
              <p className="text-xs text-slate-200">Pós-Graduado em Data Science & ADS pela UFPE e instituições parceiras.</p>
            </div>
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-center">
              <span className="material-symbols-outlined text-purple-600 text-4xl mb-4">rocket_launch</span>
              <h4 className="font-bold mb-2">Impacto</h4>
              <p className="text-xs text-slate-500">Focado em automação de processos internos e arquitetura escalável.</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-[40px] text-white">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold">Especialista Regional</h4>
                <span className="bg-white/20 px-2 py-1 rounded text-[10px] uppercase font-bold">Recife/PE</span>
              </div>
              <p className="text-sm opacity-90">Atuando diretamente no polo tecnológico de Pernambuco, conectando inovação acadêmica ao mercado.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[20rem]">code</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Stack Tecnológica</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Um arsenal diversificado focado em performance, automação e análise preditiva.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-white/10 hover:border-blue-500/50 transition-all duration-300 bg-white/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <img src="https://cdn.simpleicons.org/python/3b82f6" className="w-16 h-16 mb-6 rounded-2xl bg-white p-2" alt="DS" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Ciência de Dados <span className="material-symbols-outlined text-blue-400">insights</span></h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">Python</span>
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">Data Visualization</span>
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">Analytics</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Pós-graduação focada em extração de valor e insights estratégicos para tomada de decisão.</p>
            </div>

            <div className="p-8 rounded-[32px] border border-white/10 hover:border-purple-500/50 transition-all duration-300 bg-white/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <img src="https://cdn.simpleicons.org/dotnet/9333ea" className="w-16 h-16 mb-6 rounded-2xl bg-white p-2" alt="Back" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Backend & C# <span className="material-symbols-outlined text-purple-400">database</span></h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">C# / .NET</span>
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">Entity Framework</span>
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">API Design</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Experiência sólida na construção de sistemas robustos, incluindo o projeto SmartSchool e configurações avançadas.</p>
            </div>

            <div className="p-8 rounded-[32px] border border-white/10 hover:border-orange-500/50 transition-all duration-300 bg-white/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              <img src="https://cdn.simpleicons.org/dart/f97316" className="w-16 h-16 mb-6 rounded-2xl bg-white p-2" alt="Auto" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Automação & Dart <span className="material-symbols-outlined text-orange-400">code</span></h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold">Dart</span>
                <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold">Python Scrapers</span>
                <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold">Job Automation</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Desenvolvimento de ferramentas de produtividade para automatizar rotinas de trabalho massivas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Projetos em Destaque</h2>
            <p className="text-slate-500 max-w-md">Uma seleção dos meus repositórios públicos e contribuições técnicas mais relevantes.</p>
          </div>
          <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
            Ver todo o GitHub <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>

        <div className="carousel-container -mx-6 px-6 md:mx-0 md:px-0">
          <div className="carousel-track">
            {[1, 2].map((key) => (
              <React.Fragment key={key}>
                <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 tech-card">
                  <div className="aspect-video bg-slate-100 p-6 flex items-center justify-center overflow-hidden relative">
                    <img src="https://cdn.simpleicons.org/python/3776AB" className="w-20 h-20 opacity-20 absolute" alt="Python Bg" />
                    <span className="material-symbols-outlined text-6xl text-slate-300 group-hover:scale-110 transition duration-500">smart_toy</span>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">Automatizando-Job</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Python</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Repositório dedicado a automatizar ações massivas e repetitivas no ambiente de trabalho, otimizando o tempo em mais de 60%.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm">star</span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">fork_left</span>
                      </div>
                      <a href="https://github.com/Ranyeri-Klennes/Automatizando-Job" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
                        <span className="material-symbols-outlined text-slate-900">link</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 tech-card">
                  <div className="aspect-video bg-slate-100 p-6 flex items-center justify-center overflow-hidden relative">
                    <img src="https://cdn.simpleicons.org/dotnet/512BD4" className="w-20 h-20 opacity-20 absolute" alt="C# Bg" />
                    <span className="material-symbols-outlined text-6xl text-slate-300 group-hover:scale-110 transition duration-500">school</span>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">SmartSchool</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">C# / .NET</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Arquitetura de sistema acadêmico robusto utilizando C#, demonstrando habilidades em modelagem de dados e backend escalável.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm">star</span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">fork_left</span>
                      </div>
                      <a href="https://github.com/Ranyeri-Klennes/SmartSchool" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
                        <span className="material-symbols-outlined text-slate-900">link</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 tech-card">
                  <div className="aspect-video bg-slate-100 p-6 flex items-center justify-center overflow-hidden relative">
                    <img src="https://cdn.simpleicons.org/dart/0175C2" className="w-20 h-20 opacity-20 absolute" alt="Dart Bg" />
                    <span className="material-symbols-outlined text-6xl text-slate-300 group-hover:scale-110 transition duration-500">diversity_3</span>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">Migles</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">Dart</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Projeto exploratório em Dart focando em interatividade e estrutura de componentes, mostrando versatilidade em novas linguagens.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm">star</span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">fork_left</span>
                      </div>
                      <a href="https://github.com/Ranyeri-Klennes/migles" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
                        <span className="material-symbols-outlined text-slate-900">link</span>
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Histórico Profissional</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-2 top-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
              </div>
              <span className="text-xs font-bold text-blue-600 mb-2 block tracking-widest">2022 - PRESENTE</span>
              <h3 className="text-xl font-bold mb-1">Fullstack Developer</h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">Fade-UFPE (Fundação de Apoio ao Desenvolvimento)</p>
              <p className="text-sm text-slate-500 leading-relaxed">Implementação de soluções digitais e resolução de problemas técnicos estruturais, contribuindo para a eficiência tecnológica da fundação no Recife.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200"></div>
              <span className="text-xs font-bold text-slate-400 mb-2 block tracking-widest">2023</span>
              <h3 className="text-xl font-bold mb-1">Especialização em Ciência de Dados</h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">Pós-Graduação</p>
              <p className="text-sm text-slate-500 leading-relaxed">Conclusão de pós-graduação focada em análise estatística, machine learning e visualização de dados complexos.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-200"></div>
              <span className="text-xs font-bold text-slate-400 mb-2 block tracking-widest">2021</span>
              <h3 className="text-xl font-bold mb-1">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">Graduação</p>
              <p className="text-sm text-slate-500 leading-relaxed">Fundamentação acadêmica em arquitetura de software, lógica de programação e gerenciamento de projetos de TI.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="pt-24 pb-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos construir algo <span className="gradient-text">incrível</span>?</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">Seja para uma proposta de projeto, colaboração ou apenas para trocar uma ideia sobre dados e código, estou à disposição.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:ranyeri.klennes@gmail.com" className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
              <span className="material-symbols-outlined text-blue-400">mail</span>
              <span className="font-semibold text-sm">ranyeri.klennes@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
              <LinkedInIcon className="w-5 h-5" />
              <span className="font-semibold text-sm">LinkedIn Profile</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm">
              © 2026 Ranyeri Klennes Alves Cavalcante. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
