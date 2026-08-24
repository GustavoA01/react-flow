import type { Aluno } from '@/data/types/api';

export type RankAluno = Pick<Aluno, 'id' | 'nome' | 'pontos'>;

export const temporaryRanks: RankAluno[] = [
  { id: '1', nome: 'Gustavo Aguiar', pontos: 100 },
  { id: '2', nome: 'Davi Martins', pontos: 90 },
  { id: '3', nome: 'Miguel Bizzi', pontos: 80 },
  { id: '4', nome: 'Samuel Leite', pontos: 70 },
  { id: '5', nome: 'Jean Carlo Machado', pontos: 60 },
  { id: '6', nome: 'Barbara Giovanna', pontos: 50 },
  { id: '7', nome: 'Danielle Santos', pontos: 40 },
  { id: '8', nome: 'Juliana Fernandes Moreira Cardoso', pontos: 30 },
  { id: '9', nome: 'Hayanne Santos', pontos: 20 },
  { id: '10', nome: 'Hadassa da Silva', pontos: 10 },
  { id: '11', nome: 'Edwaldo', pontos: 5 },
  { id: '12', nome: 'Ana Paula', pontos: 2 },
  { id: '13', nome: 'Bruno Dias', pontos: 1 },
  { id: '14', nome: 'Camila Nunes', pontos: 0 },
  { id: '15', nome: 'Diego Barros', pontos: 0 },
  { id: '16', nome: 'Elisa Moreira', pontos: 0 },
];
