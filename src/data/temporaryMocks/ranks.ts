import type { Aluno } from '@/data/types/api';

export type RankAluno = Pick<Aluno, 'id' | 'nome' | 'apelido' | 'pontos'>;

export const temporaryRanks: RankAluno[] = [
  { id: '1', nome: 'Gustavo Aguiar', apelido: 'Gu', pontos: 100 },
  { id: '2', nome: 'Davi Martins', apelido: 'Davizera', pontos: 90 },
  { id: '3', nome: 'Miguel Bizzi', apelido: 'Bizzi', pontos: 80 },
  { id: '4', nome: 'Samuel Leite', apelido: 'Samuca', pontos: 70 },
  { id: '5', nome: 'Jean Carlo Machado', apelido: 'Jean', pontos: 60 },
  { id: '6', nome: 'Barbara Giovanna', apelido: 'Babi', pontos: 50 },
  { id: '7', nome: 'Danielle Santos', apelido: 'Dani', pontos: 40 },
  { id: '8', nome: 'Juliana Fernandes Moreira Cardoso', apelido: 'Ju', pontos: 30 },
  { id: '9', nome: 'Hayanne Santos', apelido: 'Hay', pontos: 20 },
  { id: '10', nome: 'Hadassa da Silva', apelido: 'Dassa', pontos: 10 },
  { id: '11', nome: 'Edwaldo', apelido: 'Edu', pontos: 5 },
  { id: '12', nome: 'Ana Paula', apelido: 'Aninha', pontos: 2 },
  { id: '13', nome: 'Bruno Dias', apelido: 'Bru', pontos: 1 },
  { id: '14', nome: 'Camila Nunes', apelido: 'Cami', pontos: 0 },
  { id: '15', nome: 'Diego Barros', apelido: 'Diegão', pontos: 0 },
  { id: '16', nome: 'Elisa Moreira', apelido: 'Lili', pontos: 0 },
];
