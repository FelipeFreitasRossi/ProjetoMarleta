import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/dashboard', nome: 'Dashboard', icone: '🏠' },
    { path: '/dashboard/conteudo', nome: 'Conteúdo da Semana', icone: '📖' },
    { path: '/dashboard/exercicios', nome: 'Exercícios Rápidos', icone: '⚡' },
    { path: '/dashboard/conteudos-gramaticais', nome: 'Conteúdos Gramaticais', icone: '📚' },
    { path: '/dashboard/historico', nome: 'Histórico', icone: '🕒' },
    { path: '/dashboard/configuracoes', nome: 'Configurações', icone: '⚙️' },
  ];

  return (
    <>
      {/* Botão hambúrguer - apenas mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden group"
        aria-label="Menu principal"
      >
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`absolute h-0.5 w-6 bg-white rounded-full transform transition-all duration-300 ease-out ${
                isOpen ? 'rotate-45 top-2' : 'top-0'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0' : 'top-2 opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white rounded-full transform transition-all duration-300 ease-out ${
                isOpen ? '-rotate-45 top-2' : 'top-4'
              }`}
            />
          </div>
        </div>
      </button>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden transition-all duration-300 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - agora com min-h-screen e flex column para ocupar toda altura */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:relative md:translate-x-0 md:flex md:flex-col md:min-h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:rounded-none rounded-r-3xl`}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white rounded-r-3xl md:rounded-none flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm">
              👨‍🏫
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold">Prof. Marleta</h2>
              <p className="text-indigo-100 text-xs">Gramática Interativa</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 font-semibold shadow-md'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600 hover:translate-x-1'
                }`
              }
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                {item.icone}
              </span>
              <span className="text-base">{item.nome}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={() => {
              sessionStorage.clear();
              window.location.href = '/';
            }}
            className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-700 hover:bg-red-50 py-3 rounded-xl transition text-sm font-medium group"
          >
            <span className="text-xl transition-transform group-hover:scale-110">🚪</span>
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
}