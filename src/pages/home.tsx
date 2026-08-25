import type { Usuario } from '@/data/types/api';
import { Navigate } from 'react-router-dom';
import { Map } from './mapa';

const userMock = {
  id: '1',
  nome: 'John Doe',
  apelido: 'John',
  senha: '123456',
  tipo: 'ALUNO',
  pontos: 0,
  imagemPerfil: '',
  cursoIds: [],
  medalhas: [],
} as Usuario;

export const Home = () => {
  if (userMock.tipo === 'MONITOR') return <Navigate to="/cursos" replace />;

  return <Map />;
};
