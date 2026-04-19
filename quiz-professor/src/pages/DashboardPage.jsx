import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import ConteudoSemana from '../components/ConteudoSemana';
import ExerciciosRapidos from '../components/ExerciciosRapidos';
import ConteudosGramaticais from '../components/ConteudosGramaticais';
import TopicoGramaticaDetalhe from '../components/TopicoGramaticaDetalhe';
import HistoricoContent from '../components/HistoricoContent';
import ConfiguracoesContent from '../components/ConfiguracoesContent';

export default function DashboardPage() {
  const [alunoNome, setAlunoNome] = useState('');
  const [alunoTurma, setAlunoTurma] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const nome = sessionStorage.getItem('alunoNome');
    const turma = sessionStorage.getItem('alunoTurma');
    if (!nome || !turma) {
      window.location.href = '/';
    } else {
      setAlunoNome(nome);
      setAlunoTurma(turma);
    }
  }, []);

  if (!alunoNome) {
    return <div className="text-center mt-20 text-gray-600">Carregando...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        {/* Header mobile com hambúrguer e título */}
        <header className="md:hidden bg-white shadow-sm px-4 py-3 flex items-center justify-between border-b border-gray-200 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Abrir menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="h-0.5 w-6 bg-indigo-600 rounded-full"></span>
              <span className="h-0.5 w-6 bg-indigo-600 rounded-full"></span>
              <span className="h-0.5 w-6 bg-indigo-600 rounded-full"></span>
            </div>
          </button>
          <h1 className="text-lg font-serif font-bold text-indigo-800">Prof. Marleta</h1>
          <div className="w-8"></div> {/* Espaço vazio para equilibrar */}
        </header>

        {/* Conteúdo principal */}
        <main className="flex-1 p-4 md:p-6 pt-4 md:pt-6 overflow-auto">
          <Routes>
            <Route index element={<DashboardContent alunoNome={alunoNome} turma={alunoTurma} />} />
            <Route path="conteudo" element={<ConteudoSemana alunoNome={alunoNome} turma={alunoTurma} />} />
            <Route path="exercicios" element={<ExerciciosRapidos alunoNome={alunoNome} turma={alunoTurma} />} />
            <Route path="conteudos-gramaticais" element={<ConteudosGramaticais />} />
            <Route path="conteudos-gramaticais/:slug" element={<TopicoGramaticaDetalhe alunoNome={alunoNome} turma={alunoTurma} />} />
            <Route path="historico" element={<HistoricoContent alunoNome={alunoNome} turma={alunoTurma} />} />
            <Route path="configuracoes" element={<ConfiguracoesContent alunoNome={alunoNome} turma={alunoTurma} onUpdate={() => {}} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}