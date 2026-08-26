import type { Aluno } from '@/data/types/api';

export const mockLoggedUser: Aluno = {
  id: '1',
  nome: 'Gustavo Aguiar',
  apelido: 'Gu',
  senha: '123456',
  tipo: 'ALUNO',
  pontos: 100,
  imagemPerfil: '',
  cursoIds: ['curso-calculo-1'],
  medalhas: [],
};
