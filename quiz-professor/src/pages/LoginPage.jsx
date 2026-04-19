import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Para imagem local dentro de src/assets, descomente a linha abaixo e use a variável
// import imagemLogin from '../assets/imagem-login.jpg';

export default function LoginPage() {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('3M1');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome.trim() === '') {
      alert('Por favor, digite seu nome completo.');
      return;
    }
    sessionStorage.setItem('alunoNome', nome.trim());
    sessionStorage.setItem('alunoTurma', turma);
    navigate('/dashboard');
  };

  // ALTERE AQUI: coloque o caminho da sua imagem
  // Opção 1: imagem na pasta public (ex: public/minha-imagem.jpg)
  const imagemUrl = '/imagem-login.jpg'; 
  
  // Opção 2: imagem externa (URL)
  // const imagemUrl = 'https://exemplo.com/sua-imagem.jpg';
  
  // Opção 3: imagem importada (descomente o import acima e use)
  // const imagemUrl = imagemLogin;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado esquerdo - Formulário */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 md:px-12 bg-white">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-gray-800">Prof. Marleta</h1>
            <p className="text-gray-500 mt-2">Acesse sua conta para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Nome completo</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Turma</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="3M1"
                    checked={turma === '3M1'}
                    onChange={(e) => setTurma(e.target.value)}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">3M1</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="3M2"
                    checked={turma === '3M2'}
                    onChange={(e) => setTurma(e.target.value)}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">3M2</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            >
              Entrar na plataforma →
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-8">
            Sistema de aprendizado gramatical
          </p>
        </div>
      </div>

      {/* Lado direito - Imagem personalizada (apenas desktop) */}
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-indigo-700 to-purple-800 items-center justify-center p-12 relative overflow-hidden">
        {/* Caso queira uma imagem de fundo, use bg-cover, mas vou deixar a imagem como elemento principal */}
        <img
          src={imagemUrl}
          alt="Imagem institucional"
          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          onError={(e) => {
            // Fallback caso a imagem não exista
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div class="text-center text-white">
                <div class="text-8xl mb-6">📚✨</div>
                <h2 class="text-3xl font-serif font-bold mb-4">Gramática com Excelência</h2>
                <p class="text-indigo-100 max-w-md mx-auto">Domine a língua portuguesa com conteúdos didáticos, exercícios interativos e acompanhamento personalizado.</p>
              </div>
            `;
          }}
        />
      </div>
    </div>
  );
}