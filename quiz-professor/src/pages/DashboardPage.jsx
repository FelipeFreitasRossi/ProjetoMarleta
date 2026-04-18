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
    // Aqui garantimos que o container ocupe 100% da altura da viewport
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 pt-20 md:pt-6 overflow-auto">
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
  );
}