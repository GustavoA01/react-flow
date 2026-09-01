import type { AlunoType } from '@/data/types/api';

export const mockLoggedAluno: AlunoType = {
  id: '1',
  nome: 'Gustavo Aguiar',
  apelido: 'Gu',
  senha: '123456',
  tipo: 'ALUNO',
  pontos: 40,
  imagemPerfil:
    'https://res-console.cloudinary.com/dbyal02d7/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/Q2hhdEdQVF9JbWFnZV8yNl9kZV9hZ28uX2RlXzIwMjZfMTZfNDBfNDNfaTk1emVh/template_primary',
  cursoIds: ['curso-calculo-1'],
};

export const findAlunoByCredentials = (apelido: string, senha: string) =>
  mockLoggedAluno.apelido === apelido && mockLoggedAluno.senha === senha
    ? mockLoggedAluno
    : undefined;
