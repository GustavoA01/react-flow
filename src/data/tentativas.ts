import type { TentativaType } from './types/api';

export const tentativasDoAlunoNaAtividade = (
  tentativas: TentativaType[],
  alunoId: string,
  atividadeId: string
) =>
  tentativas.filter(
    (item) => item.alunoId === alunoId && item.atividadeId === atividadeId
  );

export const contarTentativasDoAluno = (
  tentativas: TentativaType[],
  alunoId: string,
  atividadeId: string
) => tentativasDoAlunoNaAtividade(tentativas, alunoId, atividadeId).length;

export const melhorPontuacaoDoAluno = (
  tentativas: TentativaType[],
  alunoId: string,
  atividadeId: string
) => {
  const pontuacoes = tentativasDoAlunoNaAtividade(
    tentativas,
    alunoId,
    atividadeId
  ).map((item) => item.pontuacaoObtida);

  return pontuacoes.length ? Math.max(...pontuacoes) : 0;
};

export const tentativasDaAtividade = (
  tentativas: TentativaType[],
  atividadeId: string
) => tentativas.filter((item) => item.atividadeId === atividadeId);

export const ultimaTentativaPorAluno = (
  tentativas: TentativaType[],
  atividadeId: string
) => {
  const porAluno = new Map<string, TentativaType>();

  tentativasDaAtividade(tentativas, atividadeId).forEach((item) => {
    const atual = porAluno.get(item.alunoId);
    if (!atual || item.dataEnvio >= atual.dataEnvio) {
      porAluno.set(item.alunoId, item);
    }
  });

  return [...porAluno.values()];
};
