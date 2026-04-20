import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ConfiguracoesContent({ alunoNome, turma, onUpdate }) {
  const { darkMode, toggleTheme } = useTheme();
  const [novoNome, setNovoNome] = useState(alunoNome);
  const [novaTurma, setNovaTurma] = useState(turma);
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = () => {
    sessionStorage.setItem('alunoNome', novoNome);
    sessionStorage.setItem('alunoTurma', novaTurma);
    if (onUpdate) onUpdate(novoNome, novaTurma);
    
    // Feedback visual discreto (opcional)
    setMensagem('✅ Dados salvos com sucesso!');
    setTimeout(() => setMensagem(''), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">⚙️ Configurações</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-6">
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Nome completo</label>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Turma</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="radio" value="3M1" checked={novaTurma === '3M1'} onChange={() => setNovaTurma('3M1')} /> 3M1
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="radio" value="3M2" checked={novaTurma === '3M2'} onChange={() => setNovaTurma('3M2')} /> 3M2
            </label>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">🌙 Tema escuro</span>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${darkMode ? 'bg-indigo-600' : 'bg-gray-300'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Ative o modo escuro para estudar à noite com mais conforto.</p>
        </div>
        <button onClick={handleSalvar} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
          Salvar alterações
        </button>
        {mensagem && (
          <p className="text-sm text-green-600 dark:text-green-400 text-center">{mensagem}</p>
        )}
      </div>
    </div>
  );
}