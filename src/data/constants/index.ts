import type { CoordinateExtent } from '@xyflow/react';
import { nodesLastPosition } from './nodesPhases';

const horizontalLimit = 1500;
const verticalBottomLimit = 500;

export const extend: CoordinateExtent = [
  [-horizontalLimit, nodesLastPosition], // Permite arrastar um pouco para a esquerda [minX, minY]
  [horizontalLimit, verticalBottomLimit], // Permite arrastar até 1500px para a direita [maxX, maxY]
  // O maxY na verdade é o máximo para baixo e minY é o máximo para cima
];
