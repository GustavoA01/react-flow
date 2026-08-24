import type { Aluno } from '@/data/types/api';
import { Navigate } from 'react-router-dom';
import { Map } from './mapa';

const alunoMock: Aluno = {
  id: '1',
  nome: 'John Doe',
  apelido: 'John',
  senha: '123456',
  tipo: 'ALUNO',
  pontos: 0,
  imagemPerfil: '',
  cursoIds: [],
  medalhas: [],
};

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  if (alunoMock.tipo === 'MONITOR') return <Navigate to="/cursos" replace />;

  return <Map />;
};
