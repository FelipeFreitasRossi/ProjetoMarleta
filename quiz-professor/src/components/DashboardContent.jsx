import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';

export default function DashboardContent({ alunoNome, turma }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-6">📌 Painel do Aluno</h2>
      <ProfileCard alunoNome={alunoNome} turma={turma} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {[
          { icone: '📖', titulo: 'Conteúdo da Semana', desc: 'Adjuntos adverbiais: teoria completa.', cor: 'indigo', link: '/dashboard/conteudo' },
          { icone: '✍️', titulo: 'Exercícios Rápidos', desc: 'Teste seus conhecimentos em 5 min.', cor: 'emerald', link: '/dashboard/exercicios' },
          { icone: '🏆', titulo: 'Ranking da Turma', desc: 'Veja sua posição.', cor: 'amber', link: '#' },
          { icone: '📅', titulo: 'Próxima Avaliação', desc: '25/04 - Orações subordinadas.', cor: 'rose', link: '#' }
        ].map((item, idx) => (
          <div key={idx} ref={el => cardsRef.current[idx] = el} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6 opacity-0 transform translate-y-4">
            <div className="text-3xl mb-2">{item.icone}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.titulo}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            <button className={`mt-4 bg-${item.cor}-600 text-white px-4 py-2 rounded-lg text-sm`}>Acessar</button>
          </div>
        ))}
      </div>
    </div>
  );
}