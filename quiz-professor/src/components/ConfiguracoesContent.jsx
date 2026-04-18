import { useState, useEffect } from 'react';

export default function ConfiguracoesContent({ alunoNome, turma, onUpdate }) {
  const [novoNome, setNovoNome] = useState(alunoNome);
  const [novaTurma, setNovaTurma] = useState(turma);
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = () => {
    sessionStorage.setItem('alunoNome', novoNome);
    sessionStorage.setItem('alunoTurma', novaTurma);
    if (onUpdate) onUpdate(novoNome, novaTurma);
    setMensagem('Dados atualizados com sucesso!');
    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">⚙️ Configurações</h2>
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div>
          <label className="block font-medium text-sm sm:text-base">Nome completo</label>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm sm:text-base"
          />
        </div>
        <div>
          <label className="block font-medium text-sm sm:text-base">Turma</label>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center gap-2">
              <input type="radio" value="3M1" checked={novaTurma === '3M1'} onChange={() => setNovaTurma('3M1')} /> 3M1
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="3M2" checked={novaTurma === '3M2'} onChange={() => setNovaTurma('3M2')} /> 3M2
            </label>
          </div>
        </div>
        <button
          onClick={handleSalvar}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition"
        >
          Salvar alterações
        </button>
        {mensagem && <p className="text-green-600 text-sm">{mensagem}</p>}
      </div>
    </div>
  );
}