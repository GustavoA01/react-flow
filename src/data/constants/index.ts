import type { CoordinateExtent } from '@xyflow/react';
import { nodesLastPosition } from './nodesPhases';
import { Map as MapIcon, NotebookPen, Trophy } from 'lucide-react';

const horizontalLimit = 1500;
const verticalBottomLimit = 500;

export const extend: CoordinateExtent = [
  [-horizontalLimit, nodesLastPosition], // Permite arrastar um pouco para a esquerda [minX, minY]
  [horizontalLimit, verticalBottomLimit], // Permite arrastar até 1500px para a direita [maxX, maxY]
  // O maxY na verdade é o máximo para baixo e minY é o máximo para cima
];

export const headerItems = [
  { name: 'Cursos', path: '/cursos' },
  { name: 'Mapa', path: '/' },
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
