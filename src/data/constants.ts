import { Map as MapIcon, NotebookPen, Trophy } from 'lucide-react';

export const MAX_TENTATIVAS = 2;

export const mapPath = (isMonitor: boolean) => (isMonitor ? '/mapa' : '/');

export const getHeaderItems = (isMonitor: boolean) =>
  [
    { name: 'Cursos', path: '/cursos' },
    { name: 'Mapa', path: mapPath(isMonitor) },
    { name: 'Medalhas', path: '/medalhas' },
  ] as const;

export const getBottomNavigateButtons = (isMonitor: boolean) =>
  [
    {
      icon: NotebookPen,
      to: '/cursos',
    },
    {
      icon: MapIcon,
      to: mapPath(isMonitor),
    },
    {
      icon: Trophy,
      to: '/rankings',
    },
  ] as const;
