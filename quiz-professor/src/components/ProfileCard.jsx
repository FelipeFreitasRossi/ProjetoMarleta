import { useEffect, useState } from 'react';
import { getPerfil } from '../services/db';

export default function ProfileCard({ alunoNome, turma }) {
  const [perfil, setPerfil] = useState({ xp: 0, nivel: 1 });

  useEffect(() => {
    getPerfil(alunoNome, turma).then(setPerfil);
  }, [alunoNome, turma]);

  const xpProximo = perfil.nivel * 100;
  const progresso = (perfil.xp % 100) / 100 * 100;

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl shadow-lg p-5 text-white mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">{alunoNome}</h3>
          <p className="text-indigo-200 text-sm">Turma {turma}</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold">Nível {perfil.nivel}</span>
          <p className="text-xs text-indigo-200">{perfil.xp} XP</p>
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-indigo-950 rounded-full h-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${progresso}%` }}></div>
        </div>
        <p className="text-xs text-indigo-200 mt-1">{perfil.xp % 100}/{xpProximo} XP para próximo nível</p>
      </div>
    </div>
  );
}