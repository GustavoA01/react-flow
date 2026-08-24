import type { Tentativa } from '@/data/types/api';

const tentativa = (
  id: string,
  alunoId: string,
  atividadeId: string,
  pontuacaoObtida: number
): Tentativa => ({
  id,
  alunoId,
  atividadeId,
  pontuacaoObtida,
  dataEnvio: '2026-08-20T12:00:00.000Z',
  respostas: [],
});

const alunoId = '1';

export const temporaryTentativas: Tentativa[] = [
  tentativa('tent-1', alunoId, 'atv-regras-derivacao', 5),
  tentativa('tent-2', alunoId, 'atv-regras-derivacao', 7),
  tentativa('tent-3', alunoId, 'atv-derivada-produto', 4),
  tentativa('tent-4', alunoId, 'atv-nocao-limite', 3),
  tentativa('tent-5', alunoId, 'atv-tipos-primitivos', 2),
  tentativa('tent-6', alunoId, 'atv-tipos-primitivos', 2),
  tentativa('tent-7', alunoId, 'atv-mru', 4),
  tentativa('tent-8', alunoId, 'atv-select', 3),
];

export const contarTentativasDoAluno = (
  atividadeId: string,
  idAluno = alunoId
) =>
  temporaryTentativas.filter(
    (item) => item.alunoId === idAluno && item.atividadeId === atividadeId
  ).length;

export const melhorPontuacaoDoAluno = (
  atividadeId: string,
  idAluno = alunoId
) => {
  const pontuacoes = temporaryTentativas
    .filter(
      (item) => item.alunoId === idAluno && item.atividadeId === atividadeId
    )
    .map((item) => item.pontuacaoObtida);

  return pontuacoes.length ? Math.max(...pontuacoes) : 0;
};
