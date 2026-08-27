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

export const registrarTentativa = (
  alunoId: string,
  atividadeId: string,
  pontuacaoObtida: number,
  respostas: RespostaType[]
) => {
  const item: TentativaType = {
    id: crypto.randomUUID(),
    alunoId,
    atividadeId,
    pontuacaoObtida,
    dataEnvio: new Date().toISOString(),
    respostas,
  };
  temporaryTentativas.push(item);
  return item;
};
