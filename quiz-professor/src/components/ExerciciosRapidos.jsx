import { useState } from 'react';
import { adicionarXP } from '../services/db';

const questoes = [
  { pergunta: "Assinale a opção em que o termo destacado é adjunto adverbial de modo:", alternativas: ["Ele fala *alto*", "Chegou *ontem*", "Mora *perto*", "Estudou *para a prova*"], correta: 0 },
  { pergunta: "Indica circunstância de lugar:", alternativas: ["Ele dormiu *pouco*", "Saia *daqui*", "Falou *baixo*", "Correu *muito*"], correta: 1 }
];

export default function ExerciciosRapidos({ alunoNome, turma }) {
  const [idx, setIdx] = useState(0);
  const [respondeu, setRespondeu] = useState(false);
  const [msg, setMsg] = useState('');
  const q = questoes[idx];

  const handleResposta = async (altIndex) => {
    if (respondeu) return;
    const acertou = altIndex === q.correta;
    setRespondeu(true);
    if (acertou) {
      await adicionarXP(alunoNome, turma, 10);
      setMsg('✅ +10 XP!');
    } else {
      setMsg('❌ Errado. A resposta correta era: ' + q.alternativas[q.correta]);
    }
    setTimeout(() => {
      if (idx + 1 < questoes.length) {
        setIdx(idx + 1);
        setRespondeu(false);
        setMsg('');
      } else {
        setMsg('🎉 Parabéns! Você completou todos os exercícios. Volte amanhã para mais!');
      }
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-4">✍️ Exercícios Rápidos</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <p className="font-medium mb-4 text-gray-800 dark:text-gray-200">{q.pergunta}</p>
        <div className="space-y-2">
          {q.alternativas.map((alt, i) => (
            <button key={i} onClick={() => handleResposta(i)} disabled={respondeu} className="w-full text-left p-2 border rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 disabled:opacity-50">
              {alt}
            </button>
          ))}
        </div>
        {msg && <p className="mt-4 text-center font-semibold text-gray-700 dark:text-gray-300">{msg}</p>}
      </div>
    </div>
  );
}