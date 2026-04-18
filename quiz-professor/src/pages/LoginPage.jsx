import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('3M1');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome.trim() === '') {
      alert('Por favor, digite seu nome.');
      return;
    }
    sessionStorage.setItem('alunoNome', nome.trim());
    sessionStorage.setItem('alunoTurma', turma);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="text-5xl sm:text-6xl mb-3">📚✨</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">Prof. Marleta</h1>
          <p className="text-indigo-100 mt-2 text-sm sm:text-base">Gramática Interativa</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-white mb-1 font-medium">Seu nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1 font-medium">Turma</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="3M1"
                  checked={turma === '3M1'}
                  onChange={(e) => setTurma(e.target.value)}
                  className="w-4 h-4"
                />
                3M1
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="3M2"
                  checked={turma === '3M2'}
                  onChange={(e) => setTurma(e.target.value)}
                  className="w-4 h-4"
                />
                3M2
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-2 rounded-lg transition transform hover:scale-105 text-sm sm:text-base"
          >
            Entrar na Dashboard →
          </button>
        </form>
      </div>
    </div>
  );
}