import { Link } from 'react-router-dom';
import { topicosGramatica } from '../data/topicosGramatica';

export default function ConteudosGramaticais() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6 border-b-2 border-indigo-300 pb-2">
        📚 Conteúdos Gramaticais
      </h2>
      <p className="text-gray-600 mb-8 text-sm sm:text-base">
        Escolha um tópico abaixo para ver a explicação detalhada e fazer exercícios.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topicosGramatica.map((topico) => (
          <Link
            key={topico.slug}
            to={`/dashboard/conteudos-gramaticais/${topico.slug}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 group"
          >
            <h3 className="text-lg sm:text-xl font-bold text-indigo-800 group-hover:text-indigo-600">{topico.titulo}</h3>
            <p className="text-gray-600 text-sm mt-2">{topico.explicacao.substring(0, 100)}...</p>
            <div className="mt-3 text-indigo-500 text-sm font-medium">Clique para estudar →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}