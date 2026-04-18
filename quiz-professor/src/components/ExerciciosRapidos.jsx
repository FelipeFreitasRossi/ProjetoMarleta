import { useState } from 'react';
import { adicionarXP } from '../services/db';

const questoes = [
  { pergunta: "Assinale a opção em que o termo destacado é adjunto adverbial de modo:", alternativas: ["Ele fala *alto*", "Chegou *ontem*", "Mora *perto*", "Estudou *para a prova*"], correta: 0 },
  { pergunta: "Indica circunstância de lugar:", alternativas: ["Ele dormiu *pouco*", "Saia *daqui*", "Falou *baixo*", "Correu *muito*"], correta: 1 },
  { pergunta: "Em 'Falou *baixo*', o adjunto adverbial é de:", alternativas: ["Tempo", "Lugar", "Modo", "Intensidade"], correta: 2 },
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
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">✍️ Exercícios Rápidos</h2>
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <p className="font-medium mb-4 text-sm sm:text-base">{q.pergunta}</p>
        <div className="space-y-2">
          {q.alternativas.map((alt, i) => (
            <button
              key={i}
              onClick={() => handleResposta(i)}
              disabled={respondeu}
              className="w-full text-left p-2 border rounded hover:bg-gray-100 disabled:opacity-50 text-sm sm:text-base"
            >
              {alt}
            </button>
          ))}
        </div>
        {msg && <p className="mt-4 text-center font-semibold text-sm sm:text-base">{msg}</p>}
      </div>
    </div>
  );
}