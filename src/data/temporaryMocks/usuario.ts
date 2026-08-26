import type { AlunoType } from '@/data/types/api';

export const mockLoggedAluno: AlunoType = {
  id: '1',
  nome: 'Gustavo Aguiar',
  apelido: 'Gu',
  senha: '123456',
  tipo: 'ALUNO',
  pontos: 40,
  imagemPerfil: '',
  cursoIds: ['curso-calculo-1'],
};
