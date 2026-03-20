import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <nav className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-md rounded-b-3xl shadow-sm mx-4 mt-2">
        <div className="font-bold text-2xl ml-4">RK.</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Início</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Stacks</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Projetos</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors mr-4">Fale Comigo</button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center space-y-6">
          <div className="text-blue-600 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Disponível para novos desafios
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Ranyeri <span className="text-blue-500">Klennes</span><br/>Alves<br/>Cavalcante
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            <strong className="text-slate-800">Desenvolvedor Fullstack com foco em Data Science.</strong><br/>
            Transformando dados complexos em soluções inovadoras e automações inteligentes.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 transition-colors">
              Ver Portfólio &rarr;
            </button>
            <a href="https://github.com/" target="_blank" className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <span className="font-bold text-slate-700 text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <span className="font-bold text-slate-700 text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="bg-slate-200 rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[400px] lg:h-[500px] relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}></div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center border border-slate-100">
          <h3 className="text-4xl font-extrabold text-slate-900">3+</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-2">Anos Exp.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center border border-slate-100">
          <h3 className="text-4xl font-extrabold text-slate-900">10+</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-2">Repositórios</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center border border-slate-100">
          <h3 className="text-4xl font-extrabold text-slate-900">Pós</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-2">Data Science</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center border border-slate-100">
          <h3 className="text-4xl font-extrabold text-slate-900">ADS</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-2">Graduação</p>
        </div>
      </section>
    </div>
  );
}
