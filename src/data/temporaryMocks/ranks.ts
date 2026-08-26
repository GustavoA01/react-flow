import type { AlunoType } from '@/data/types/api';

export type RankAluno = Pick<
  AlunoType,
  'id' | 'nome' | 'apelido' | 'pontos' | 'imagemPerfil'
>;

export const temporaryRanks: RankAluno[] = [
  {
    id: '1',
    nome: 'Gustavo Aguiar',
    apelido: 'Gu',
    pontos: 100,
    imagemPerfil:
      'https://res-console.cloudinary.com/dbyal02d7/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/Q2hhdEdQVF9JbWFnZV8yNl9kZV9hZ28uX2RlXzIwMjZfMTZfNDBfNDNfaTk1emVh/template_primary',
  },
  {
    id: '2',
    nome: 'Davi Martins',
    apelido: 'Davizera',
    pontos: 90,
    imagemPerfil: '',
  },
  {
    id: '3',
    nome: 'Miguel Bizzi',
    apelido: 'Bizzi',
    pontos: 80,
    imagemPerfil: '',
  },
  {
    id: '4',
    nome: 'Samuel Leite',
    apelido: 'Samuca',
    pontos: 70,
    imagemPerfil: '',
  },
  {
    id: '5',
    nome: 'Jean Carlo Machado',
    apelido: 'Jean',
    pontos: 60,
    imagemPerfil: '',
  },
  {
    id: '6',
    nome: 'Barbara Giovanna',
    apelido: 'Babi',
    pontos: 50,
    imagemPerfil: '',
  },
  {
    id: '7',
    nome: 'Danielle Santos',
    apelido: 'Dani',
    pontos: 40,
    imagemPerfil: '',
  },
  {
    id: '8',
    nome: 'Juliana Fernandes Moreira Cardoso',
    apelido: 'Ju',
    pontos: 30,
    imagemPerfil: '',
  },
  {
    id: '9',
    nome: 'Hayanne Santos',
    apelido: 'Hay',
    pontos: 20,
    imagemPerfil: '',
  },
  {
    id: '10',
    nome: 'Hadassa da Silva',
    apelido: 'Dassa',
    pontos: 10,
    imagemPerfil: '',
  },
  { id: '11', nome: 'Edwaldo', apelido: 'Edu', pontos: 5, imagemPerfil: '' },
  {
    id: '12',
    nome: 'Ana Paula',
    apelido: 'Aninha',
    pontos: 2,
    imagemPerfil: '',
  },
  { id: '13', nome: 'Bruno Dias', apelido: 'Bru', pontos: 1, imagemPerfil: '' },
  {
    id: '14',
    nome: 'Camila Nunes',
    apelido: 'Cami',
    pontos: 0,
    imagemPerfil: '',
  },
  {
    id: '15',
    nome: 'Diego Barros',
    apelido: 'Diegão',
    pontos: 0,
    imagemPerfil: '',
  },
  {
    id: '16',
    nome: 'Elisa Moreira',
    apelido: 'Lili',
    pontos: 0,
    imagemPerfil: '',
  },
];
