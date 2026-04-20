import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  const navItems = [
    { path: '/dashboard', nome: 'Dashboard', icone: '🏠' },
    { path: '/dashboard/conteudo', nome: 'Conteúdo da Semana', icone: '📖' },
    { path: '/dashboard/exercicios', nome: 'Exercícios Rápidos', icone: '⚡' },
    { path: '/dashboard/conteudos-gramaticais', nome: 'Conteúdos Gramaticais', icone: '📚' },
    { path: '/dashboard/historico', nome: 'Histórico', icone: '🕒' },
  ];

  const configItem = { path: '/dashboard/configuracoes', nome: 'Configurações', icone: '⚙️' };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden transition-all duration-300 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out md:relative md:translate-x-0 md:flex md:flex-col md:min-h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:rounded-none rounded-r-3xl`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700 md:hidden">
          <h2 className="text-lg font-serif font-bold text-indigo-800 dark:text-indigo-400">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white rounded-r-3xl md:rounded-none flex-shrink-0 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm">👨‍🏫</div>
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
                    ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/50 dark:to-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-semibold shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1'
                }`
              }
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">{item.icone}</span>
              <span className="text-base">{item.nome}</span>
            </NavLink>
          ))}
          <div className="border-t border-gray-100 dark:border-gray-700 my-4"></div>
          <NavLink
            to={configItem.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/50 dark:to-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-semibold shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1'
              }`
            }
          >
            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">{configItem.icone}</span>
            <span className="text-base">{configItem.nome}</span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex-shrink-0">
          <button
            onClick={() => {
              sessionStorage.clear();
              window.location.href = '/';
            }}
            className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 py-3 rounded-xl transition text-sm font-medium group"
          >
            <span className="text-xl transition-transform group-hover:scale-110">🚪</span>
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
}