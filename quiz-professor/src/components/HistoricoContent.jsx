import { useState, useEffect } from 'react';
import { buscarRespostasPorAluno } from '../services/db';

export default function HistoricoContent({ alunoNome, turma }) {
  const [historico, setHistorico] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarRespostasPorAluno(alunoNome, turma).then((data) => {
      setHistorico(data);
      setCarregando(false);
    });
  }, [alunoNome, turma]);

  if (carregando) return <div className="text-center py-10">Carregando histórico...</div>;

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">📜 Histórico de Tentativas</h2>
      {historico.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
          Nenhuma tentativa encontrada. Complete uma atividade para aparecer aqui.
        </div>
      ) : (
        <div className="space-y-4">
          {historico.map((item, idx) => {
            const respostas = JSON.parse(item.respostasJson);
            const totalPerguntas = respostas.length;
            return (
              <div key={idx} className="bg-white rounded-xl shadow p-4 border-l-4 border-indigo-500">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <span className="font-semibold text-sm sm:text-base">{new Date(item.dataHora).toLocaleDateString()}</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs sm:text-sm self-start">
                    {item.pontuacao}/{totalPerguntas}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Clique para ver detalhes (em breve)</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}