import type { RespostaType, TentativaType } from '@/data/types/api';
import { temporaryRanks } from './ranks';

const resposta = (
  id: string,
  questaoId: string,
  alternativaId: string,
  correta: boolean
): RespostaType => ({ id, questaoId, alternativaId, correta });

const tentativa = (
  id: string,
  alunoId: string,
  atividadeId: string,
  pontuacaoObtida: number,
  respostas: RespostaType[] = []
): TentativaType => ({
  id,
  alunoId,
  atividadeId,
  pontuacaoObtida,
  dataEnvio: '2026-08-20T12:00:00.000Z',
  respostas,
});

const alunoId = '1';

export const alunosDaTurma = temporaryRanks.slice(0, 8);

export const temporaryTentativas: TentativaType[] = [
  tentativa('tent-1', alunoId, 'atv-regras-derivacao', 5),
  tentativa('tent-2', alunoId, 'atv-regras-derivacao', 7),
  tentativa('tent-4', alunoId, 'atv-nocao-limite', 3),
  tentativa('tent-5', alunoId, 'atv-tipos-primitivos', 2),
  tentativa('tent-6', alunoId, 'atv-tipos-primitivos', 2),
  tentativa('tent-7', alunoId, 'atv-mru', 4),
  tentativa('tent-8', alunoId, 'atv-select', 3),
  tentativa('tent-prod-1', '1', 'atv-derivada-produto', 5, [
    resposta('r-1-1', 'q-prod-1', 'a-prod-1-b', true),
    resposta('r-1-2', 'q-prod-2', 'a-prod-2-a', true),
  ]),
  tentativa('tent-prod-2', '2', 'atv-derivada-produto', 2, [
    resposta('r-2-1', 'q-prod-1', 'a-prod-1-b', true),
    resposta('r-2-2', 'q-prod-2', 'a-prod-2-b', false),
  ]),
  tentativa('tent-prod-3', '3', 'atv-derivada-produto', 0, [
    resposta('r-3-1', 'q-prod-1', 'a-prod-1-a', false),
    resposta('r-3-2', 'q-prod-2', 'a-prod-2-b', false),
  ]),
  tentativa('tent-prod-4', '4', 'atv-derivada-produto', 5, [
    resposta('r-4-1', 'q-prod-1', 'a-prod-1-b', true),
    resposta('r-4-2', 'q-prod-2', 'a-prod-2-a', true),
  ]),
  tentativa('tent-prod-5', '5', 'atv-derivada-produto', 0, [
    resposta('r-5-1', 'q-prod-1', 'a-prod-1-c', false),
    resposta('r-5-2', 'q-prod-2', 'a-prod-2-c', false),
  ]),
  tentativa('tent-prod-6', '6', 'atv-derivada-produto', 2, [
    resposta('r-6-1', 'q-prod-1', 'a-prod-1-b', true),
    resposta('r-6-2', 'q-prod-2', 'a-prod-2-b', false),
  ]),
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

export const tentativasDaAtividade = (atividadeId: string) =>
  temporaryTentativas.filter((item) => item.atividadeId === atividadeId);

export const ultimaTentativaPorAluno = (atividadeId: string) => {
  const porAluno = new Map<string, TentativaType>();

  tentativasDaAtividade(atividadeId).forEach((item) => {
    const atual = porAluno.get(item.alunoId);
    if (!atual || item.dataEnvio >= atual.dataEnvio) {
      porAluno.set(item.alunoId, item);
    }
  });

  return [...porAluno.values()];
};
