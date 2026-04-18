import { useState } from 'react';
import { adicionarXP } from '../services/db';

export default function ConteudoSemana({ alunoNome, turma }) {
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const acertou = resposta.toLowerCase().includes('circunstância');
    if (acertou) {
      await adicionarXP(alunoNome, turma, 20);
      setFeedback('✅ Correto! +20 XP');
    } else {
      setFeedback('❌ Resposta: "Termo que indica circunstância". Tente novamente.');
    }
    setTimeout(() => setFeedback(''), 3000);
    setResposta('');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">📖 Conteúdo da Semana</h2>
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-4">
        <h3 className="text-xl font-semibold text-indigo-800">Adjuntos Adverbiais</h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Adjunto adverbial é o termo que modifica o verbo, indicando uma circunstância (tempo, lugar, modo, causa, intensidade, etc.).  
          Exemplo: "Ela chegou <strong>cedo</strong>" (tempo).  
          No Brasil Escola, você encontra tabelas completas com todos os tipos.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">✏️ Pergunta rápida (vale XP):</p>
          <p className="text-sm">O que caracteriza um adjunto adverbial?</p>
          <form onSubmit={handleSubmit} className="mt-2 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              className="flex-1 p-2 border rounded text-sm"
              placeholder="Digite sua resposta..."
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded text-sm sm:text-base">
              Responder
            </button>
          </form>
          {feedback && <p className="mt-2 text-sm font-semibold">{feedback}</p>}
        </div>
      </div>
    </div>
  );
}