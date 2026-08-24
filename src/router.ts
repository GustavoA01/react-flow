import { createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from './components/layouts/HeaderLayout';
import { Map } from './pages/mapa';
import { Courses } from './pages/cursos';
import { Rankings } from './pages/rankings';
import { MedalsPage } from './pages/medalhas';
import { CoursePage } from './pages/curso';
import { ModuloPage } from './pages/modulo';
import { NewActivity } from './pages/nova-atividade';
import { Home } from './pages/home';

export const Router = createBrowserRouter([
  {
    path: '/',
    Component: HeaderLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'mapa',
        Component: Map,
      },
      {
        path: 'cursos',
        Component: Courses,
      },
      {
        path: 'rankings',
        Component: Rankings,
      },
      {
        path: 'medalhas',
        Component: MedalsPage,
      },
    ],
  },
  {
    path: '/cursos/:cursoId',
    Component: CoursePage,
  },
  {
    path: '/cursos/:cursoId/modulos/:moduloId',
    Component: ModuloPage,
  },
  {
    path: '/cursos/:cursoId/modulos/:moduloId/nova-atividade',
    Component: NewActivity,
  },
]);
