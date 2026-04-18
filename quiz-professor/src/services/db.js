import Dexie from 'dexie';

export const db = new Dexie('QuizProfessorDB');
db.version(1).stores({
  respostas: '++id, alunoNome, turma, dataHora, pontuacao, respostasJson',
  perfil: '[turma+alunoNome], xp, nivel'
});

// Salvar resposta e ganhar XP (opcional)
export async function salvarResposta(alunoNome, turma, pontuacao, respostasArray, xpGanho = 0) {
  await db.respostas.add({
    alunoNome,
    turma,
    dataHora: new Date().toISOString(),
    pontuacao,
    respostasJson: JSON.stringify(respostasArray)
  });
  if (xpGanho > 0) await adicionarXP(alunoNome, turma, xpGanho);
}

export async function buscarRespostasPorAluno(alunoNome, turma) {
  return await db.respostas.where('alunoNome').equals(alunoNome).and(item => item.turma === turma).toArray();
}

export async function buscarTodasRespostas() {
  return await db.respostas.toArray();
}

// Perfil e XP
export async function getPerfil(alunoNome, turma) {
  let perfil = await db.perfil.get([turma, alunoNome]);
  if (!perfil) {
    perfil = { turma, alunoNome, xp: 0, nivel: 1 };
    await db.perfil.add(perfil);
  }
  return perfil;
}

export async function adicionarXP(alunoNome, turma, xp) {
  const perfil = await getPerfil(alunoNome, turma);
  const novoXP = perfil.xp + xp;
  const novoNivel = Math.floor(novoXP / 100) + 1;
  await db.perfil.update([turma, alunoNome], { xp: novoXP, nivel: novoNivel });
  return { xp: novoXP, nivel: novoNivel };
}