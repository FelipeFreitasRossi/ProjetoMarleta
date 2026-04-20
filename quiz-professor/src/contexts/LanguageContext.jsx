import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  pt: {
    dashboard: 'Dashboard',
    conteudoSemana: 'Conteúdo da Semana',
    exerciciosRapidos: 'Exercícios Rápidos',
    conteudosGramaticais: 'Conteúdos Gramaticais',
    historico: 'Histórico',
    configuracoes: 'Configurações',
    sair: 'Sair',
    bemVindo: 'Bem-vindo ao seu espaço de estudos',
    conteudoSemanaTitulo: 'Conteúdo da Semana',
    adjuntosAdverbiais: 'Adjuntos adverbiais e sua classificação',
    verMais: 'Ver mais',
    exercicioRapido: 'Exercício Rápido',
    completeFrases: 'Complete as frases com a palavra correta.',
    praticar: 'Praticar',
    ranking: 'Ranking da Turma',
    vejaDesempenho: 'Veja seu desempenho comparado aos colegas.',
    verRanking: 'Ver ranking',
    proximaAvaliacao: 'Próxima Avaliação',
    dataAvaliacao: 'Dia 25/04 - Conteúdo: Orações subordinadas.',
    lembrar: 'Lembrar',
  },
  en: {
    dashboard: 'Dashboard',
    conteudoSemana: 'Content of the Week',
    exerciciosRapidos: 'Quick Exercises',
    conteudosGramaticais: 'Grammar Content',
    historico: 'History',
    configuracoes: 'Settings',
    sair: 'Logout',
    bemVindo: 'Welcome to your study space',
    conteudoSemanaTitulo: 'Content of the Week',
    adjuntosAdverbiais: 'Adverbial adjuncts and their classification',
    verMais: 'See more',
    exercicioRapido: 'Quick Exercise',
    completeFrases: 'Complete the sentences with the correct word.',
    praticar: 'Practice',
    ranking: 'Class Ranking',
    vejaDesempenho: 'Check your performance compared to classmates.',
    verRanking: 'View ranking',
    proximaAvaliacao: 'Next Assessment',
    dataAvaliacao: 'April 25th - Content: Subordinate clauses.',
    lembrar: 'Remind',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}