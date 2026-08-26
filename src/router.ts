import { createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from './components/layouts/HeaderLayout';
import { Map } from './pages/mapa';
import { CoursesPage } from './pages/cursos';
import { MedalsPage } from './pages/medalhas';
import { CoursePage } from './pages/curso';
import { ModulePage } from './pages/modulo';
import { NewActivityPage } from './pages/nova-atividade';
import { Home } from './pages/home';
import { ManagementPage } from './pages/monitoramento';
import { NotFoundPage } from './pages/notFound';
import { ErrorPage } from './pages/error';
import { RankingsPage } from './pages/rankings';

export const Router = createBrowserRouter([
  {
    ErrorBoundary: ErrorPage,
    children: [
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
            Component: CoursesPage,
          },
          {
            path: 'rankings',
            Component: RankingsPage,
          },
          {
            path: 'medalhas',
            Component: MedalsPage,
          },
          {
            path: '*',
            Component: NotFoundPage,
          },
        ],
      },
      {
        path: '/cursos/:cursoId',
        Component: CoursePage,
      },
      {
        path: '/cursos/:cursoId/modulos/:moduloId',
        Component: ModulePage,
      },
      {
        path: '/cursos/:cursoId/modulos/:moduloId/nova-atividade',
        Component: NewActivityPage,
      },
      {
        path: '/cursos/:cursoId/modulos/:moduloId/monitoramento/:atividadeId',
        Component: ManagementPage,
      },
      {
        path: '*',
        Component: HeaderLayout,
        children: [
          {
            index: true,
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
]);
