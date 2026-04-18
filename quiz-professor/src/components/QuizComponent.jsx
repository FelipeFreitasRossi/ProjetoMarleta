import { useState } from 'react';
import { salvarResposta } from '../services/db';

const perguntas = [
  {
    id: 1,
    texto: 'Qual é a classe gramatical da palavra "felizmente"?',
    alternativas: ['Adjetivo', 'Advérbio', 'Substantivo', 'Verbo'],
    correta: 1
  },
  {
    id: 2,
    texto: 'Assinale a opção em que o termo destacado é um pronome relativo:',
    alternativas: [
      'O livro *que* li é interessante.',
      '*Ele* chegou tarde.',
      'Maria *se* machucou.',
      '*Isto* é meu.'
    ],
    correta: 0
  },
  {
    id: 3,
    texto: 'A frase "Fazem cinco anos que não o vejo" está correta?',
    alternativas: ['Sim', 'Não, o correto é "Faz cinco anos"', 'Não, o correto é "Fazem cinco anos atrás"', 'Ambas são corretas'],
    correta: 1
  },
  {
    id: 4,
    texto: 'Qual a função do "se" em "Vende-se apartamento"?',
    alternativas: ['Pronome reflexivo', 'Índice de indeterminação do sujeito', 'Partícula apassivadora', 'Conjunção condicional'],
    correta: 2
  },
  {
    id: 5,
    texto: 'Em "Espero que você *venha* amanhã", o verbo está no:',
    alternativas: ['Presente do indicativo', 'Presente do subjuntivo', 'Futuro do presente', 'Infinitivo pessoal'],
    correta: 1
  }
];

export default function QuizComponent({ alunoNome, turma, onConcluido }) {
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [selecionada, setSelecionada] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const [pontuacaoFinal, setPontuacaoFinal] = useState(0);

  const perguntaAtual = perguntas[indice];
  const total = perguntas.length;

  const handleResponder = (idx) => {
    setSelecionada(idx);
    const correta = idx === perguntaAtual.correta;
    const novaResposta = {
      perguntaId: perguntaAtual.id,
      perguntaTexto: perguntaAtual.texto,
      alternativaEscolhida: perguntaAtual.alternativas[idx],
      correta
    };
    const novasRespostas = [...respostas, novaResposta];
    setRespostas(novasRespostas);

    if (indice + 1 < total) {
      setTimeout(() => {
        setIndice(indice + 1);
        setSelecionada(null);
      }, 500);
    } else {
      const pontuacao = novasRespostas.filter(r => r.correta).length;
      setPontuacaoFinal(pontuacao);
      salvarResposta(alunoNome, turma, pontuacao, novasRespostas).then(() => {
        setFinalizado(true);
        if (onConcluido) onConcluido(pontuacao, total);
      });
    }
  };

  if (finalizado) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold text-green-700">✅ Quiz concluído!</h3>
        <p className="mt-2 text-gray-700">Você acertou {pontuacaoFinal} de {total} perguntas.</p>
        <p className="text-sm text-gray-500 mt-1">O resultado foi salvo no seu histórico.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
          Pergunta {indice+1} de {total}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">{perguntaAtual.texto}</h3>
      <div className="space-y-3">
        {perguntaAtual.alternativas.map((alt, idx) => (
          <button
            key={idx}
            onClick={() => handleResponder(idx)}
            disabled={selecionada !== null}
            className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
              selecionada === idx
                ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-200'
                : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
            } disabled:opacity-80 disabled:cursor-not-allowed`}
          >
            <span className="font-medium">{String.fromCharCode(65+idx)}.</span> {alt}
          </button>
        ))}
      </div>
      {selecionada !== null && indice + 1 < total && (
        <div className="mt-5 text-center text-sm text-gray-400 animate-pulse">
          Carregando próxima pergunta...
        </div>
      )}
    </div>
  );
}