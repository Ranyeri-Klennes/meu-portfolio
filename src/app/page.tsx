import React from 'react';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); }
        .dark-glass { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .gradient-text { background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .tech-card:hover { transform: translateY(-5px); transition: all 0.3s ease; }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        .float-anim { animation: float 4s ease-in-out infinite; }
      `}} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center shadow-sm">
            <div className="font-extrabold text-xl tracking-tight">RK<span className="text-blue-600">.</span></div>
            <div className="hidden md:flex gap-8 text-sm font-semibold">
                <a href="#inicio" className="hover:text-blue-600 transition">Início</a>
                <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
                <a href="#habilidades" className="hover:text-blue-600 transition">Stacks</a>
                <a href="#projetos" className="hover:text-blue-600 transition">Projetos</a>
                <a href="#contato" className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">Fale Comigo</a>
            </div>
            <button className="md:hidden material-symbols-outlined">menu</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    DISPONÍVEL PARA NOVOS DESAFIOS
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                    Ranyeri <span className="gradient-text">Klennes</span><br/>
                    Alves Cavalcante
                </h1>
                <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
                    Desenvolvedor Fullstack com foco em <span className="font-bold text-slate-900">Data Science</span>. 
                    Transformando dados complexos em soluções inovadoras e automações inteligentes.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#projetos" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition shadow-xl shadow-slate-200">
                        Ver Portfólio <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                    <div className="flex gap-3">
                        <a href="https://github.com/Ranyeri-Klennes" target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl hover:bg-white transition shadow-sm">
                            <img src="https://cdn.simpleicons.org/github/0F172A" className="w-6 h-6" alt="GitHub" />
                        </a>
                        <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl hover:bg-white transition shadow-sm">
                            <img src="https://cdn.simpleicons.org/linkedin/0A66C2" className="w-6 h-6" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative">
                <div className="relative z-10 w-full aspect-square bg-white rounded-[60px] shadow-2xl overflow-hidden float-anim p-2">
                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover rounded-[50px]" alt="Profile Visual" />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-400/20 blur-3xl rounded-full"></div>
            </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass p-6 rounded-[32px] text-center shadow-lg border-white/50">
                <div className="text-3xl font-black text-slate-900 mb-1">3+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Anos Exp.</div>
            </div>
            <div className="glass p-6 rounded-[32px] text-center shadow-lg border-white/50">
                <div className="text-3xl font-black text-slate-900 mb-1">10+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Repositórios</div>
            </div>
            <div className="glass p-6 rounded-[32px] text-center shadow-lg border-white/50">
                <div className="text-3xl font-black text-slate-900 mb-1">Pós</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Data Science</div>
            </div>
            <div className="glass p-6 rounded-[32px] text-center shadow-lg border-white/50">
                <div className="text-3xl font-black text-slate-900 mb-1">ADS</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Graduação</div>
            </div>
        </div>
      </section>

      {/* Bio Section */}
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
                <div className="dark-glass p-8 rounded-[40px] text-white flex flex-col justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-4xl mb-4">school</span>
                    <h4 className="font-bold mb-2">Formação</h4>
                    <p className="text-xs text-slate-400">Pós-Graduado em Data Science & ADS pela UFPE e instituições parceiras.</p>
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

      {/* Tech Stack Matrix */}
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
                <div className="p-8 rounded-[32px] border border-white/10 hover:border-blue-500/50 transition bg-white/5">
                    <img src="https://cdn.simpleicons.org/python/3b82f6" className="w-16 h-16 mb-6 rounded-2xl bg-white p-2" alt="DS" />
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Ciência de Dados <span className="material-symbols-outlined text-blue-400">insights</span></h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">Python</span>
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">Data Visualization</span>
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">Analytics</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">Pós-graduação focada em extração de valor e insights estratégicos para tomada de decisão.</p>
                </div>

                <div className="p-8 rounded-[32px] border border-white/10 hover:border-purple-500/50 transition bg-white/5">
                    <img src="https://cdn.simpleicons.org/dotnet/9333ea" className="w-16 h-16 mb-6 rounded-2xl bg-white p-2" alt="Back" />
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Backend & C# <span className="material-symbols-outlined text-purple-400">database</span></h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">C# / .NET</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">Entity Framework</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">API Design</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">Experiência sólida na construção de sistemas robustos, incluindo o projeto SmartSchool e configurações avançadas.</p>
                </div>

                <div className="p-8 rounded-[32px] border border-white/10 hover:border-orange-500/50 transition bg-white/5">
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

      {/* Projects Portfolio */}
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

        <div className="project-grid">
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
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Histórico Profissional</h2>
            <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 shadow-lg shadow-blue-200"></div>
                    <span className="text-xs font-bold text-blue-600 mb-2 block tracking-widest">PRESENTE - 2022</span>
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

      {/* Contact & Footer */}
      <footer id="contato" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Vamos construir algo <span className="gradient-text">incrível</span>?</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">Seja para uma proposta de projeto, colaboração ou apenas para trocar uma ideia sobre dados e código, estou à disposição.</p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
                <a href="mailto:ranyeri.klennes@gmail.com" className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                    <span className="material-symbols-outlined text-blue-400">mail</span>
                    <span className="font-semibold text-sm">ranyeri.klennes@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/ranyeri-klennes" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                    <img src="https://cdn.simpleicons.org/linkedin/FFFFFF" className="w-5 h-5" alt="LinkedIn" />
                    <span className="font-semibold text-sm">LinkedIn Profile</span>
                </a>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
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
