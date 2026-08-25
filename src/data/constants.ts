import { Map as MapIcon, NotebookPen, Trophy } from 'lucide-react';

export const MAX_TENTATIVAS = 2;

export const headerItems = [
  { name: 'Cursos', path: '/cursos' },
  { name: 'Mapa', path: '/' },
  { name: 'Medalhas', path: '/medalhas' },
];

export const bottomNavigateButtons = [
  {
    icon: NotebookPen,
    to: '/cursos',
  },
  {
    icon: MapIcon,
    to: '/',
  },
  {
    icon: Trophy,
    to: '/rankings',
  },
];
