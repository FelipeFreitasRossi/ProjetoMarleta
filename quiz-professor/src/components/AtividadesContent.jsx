import { useState } from 'react';
import QuizComponent from './QuizComponent';

export default function AtividadesContent({ alunoNome, turma }) {
  const [mostrarQuiz, setMostrarQuiz] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">📝 Atividades</h2>
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition-all">
        <p className="text-gray-600 mb-6 leading-relaxed">
          Aqui estão as atividades disponíveis. Ao concluir o quiz, seu desempenho será registrado no histórico.
        </p>
        {!mostrarQuiz ? (
          <button
            onClick={() => setMostrarQuiz(true)}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-2 rounded-md transition transform hover:scale-[1.02]"
          >
            Iniciar Quiz de Gramática
          </button>
        ) : (
          <div className="border-t pt-6 mt-4">
            <QuizComponent alunoNome={alunoNome} turma={turma} />
          </div>
        )}
      </div>
    </div>
  );
}