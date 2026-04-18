import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getTopicoBySlug } from '../data/topicosGramatica';
import { adicionarXP } from '../services/db';

export default function TopicoGramaticaDetalhe({ alunoNome, turma }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const topico = getTopicoBySlug(slug);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [xpGanho, setXpGanho] = useState(false);

  if (!topico) {
    return (
      <div className="text-center py-10">
        <p>Tópico não encontrado.</p>
        <button onClick={() => navigate('/dashboard/conteudos-gramaticais')} className="text-indigo-600 underline">
          Voltar para lista
        </button>
      </div>
    );
  }

  const handleResponder = async (idx) => {
    if (respostaSelecionada !== null) return;
    setRespostaSelecionada(idx);
    const acertou = idx === topico.exercicio.correta;
    if (acertou) {
      setFeedback('✅ Correto! Você ganhou +15 XP.');
      if (!xpGanho) {
        await adicionarXP(alunoNome, turma, 15);
        setXpGanho(true);
      }
    } else {
      setFeedback(`❌ Errado. A resposta correta é: ${topico.exercicio.alternativas[topico.exercicio.correta]}.`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-0">
      <button
        onClick={() => navigate('/dashboard/conteudos-gramaticais')}
        className="mb-4 text-indigo-600 hover:underline flex items-center gap-1 text-sm sm:text-base"
      >
        ← Voltar para todos os tópicos
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-indigo-800 mb-4">{topico.titulo}</h1>

        <div className="prose prose-indigo max-w-none text-sm sm:text-base">
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <p className="text-gray-800">{topico.explicacao}</p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: topico.detalhes }} className="text-gray-700 space-y-2" />

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">📌 Exemplos</h3>
          <ul className="list-disc pl-6 space-y-2">
            {topico.exemplos.map((ex, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: ex }} className="text-gray-700" />
            ))}
          </ul>

          {topico.exercicio && (
            <div className="mt-8 p-4 sm:p-5 bg-gray-50 rounded-xl">
              <h3 className="text-base sm:text-lg font-bold text-gray-800">✏️ Pratique agora (vale XP)</h3>
              <p className="mt-2 text-sm sm:text-base">{topico.exercicio.pergunta}</p>
              <div className="mt-3 space-y-2">
                {topico.exercicio.alternativas.map((alt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleResponder(idx)}
                    disabled={respostaSelecionada !== null}
                    className={`block w-full text-left p-2 rounded border text-sm sm:text-base ${
                      respostaSelecionada === idx
                        ? idx === topico.exercicio.correta
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : 'border-gray-300 hover:bg-gray-100'
                    } disabled:cursor-not-allowed transition`}
                  >
                    {alt}
                  </button>
                ))}
              </div>
              {feedback && <p className="mt-3 text-sm font-semibold">{feedback}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}