import BackgroundNode from '@/pages/mapa/components/trail/BackgroundNode';
import { PhaseNode } from '@/pages/mapa/components/trail/PhaseNode';
import type { PhaseNodeType } from '@/data/types/reactFlow';
import type { NodeTypes } from '@xyflow/react';

export const nodeTypes: NodeTypes = {
  phase: PhaseNode,
  background: BackgroundNode,
};

export const nodesPhases: PhaseNodeType[] = [
  {
    id: '1',
    type: 'phase',
    position: { x: 0, y: 0 },
    data: { id: '1', minPoints: 3 },
  },
  {
    id: '2',
    type: 'phase',
    position: { x: 80, y: -150 },
    data: { id: '2', minPoints: 6 },
  },
  {
    id: '3',
    type: 'phase',
    position: { x: -80, y: -300 },
    data: { id: '3', minPoints: 9 },
  },
  {
    id: '4',
    type: 'phase',
    position: { x: 160, y: -500 },
    data: { id: '4', minPoints: 12 },
  },
  {
    id: '5',
    type: 'phase',
    position: { x: 80, y: -750 },
    data: { id: '5', minPoints: 15 },
  },
  {
    id: '6',
    type: 'phase',
    position: { x: -80, y: -1000 },
    data: { id: '6', minPoints: 18 },
  },
  {
    id: '7',
    type: 'phase',
    position: { x: 90, y: -1250 },
    data: { id: '7', minPoints: 21 },
  },
  {
    id: '8',
    type: 'phase',
    position: { x: 0, y: -1500 },
    data: { id: '8', minPoints: 24 },
  },
  {
    id: '9',
    type: 'phase',
    position: { x: 80, y: -1750 },
    data: { id: '9', minPoints: 27 },
  },
  {
    id: '10',
    type: 'phase',
    position: { x: -80, y: -2000 },
    data: { id: '10', minPoints: 30 },
  },
  {
    id: '11',
    type: 'phase',
    position: { x: 150, y: -2250 },
    data: { id: '11', minPoints: 33 },
  },
  {
    id: '12',
    type: 'phase',
    position: { x: 0, y: -2500 },
    data: { id: '12', minPoints: 36 },
  },
  {
    id: '13',
    type: 'phase',
    position: { x: -140, y: -2750 },
    data: { id: '13', minPoints: 39 },
  },
  {
    id: '14',
    type: 'phase',
    position: { x: -60, y: -3000 },
    data: { id: '14', minPoints: 42 },
  },
  {
    id: '15',
    type: 'phase',
    position: { x: 90, y: -3250 },
    data: { id: '15', minPoints: 45 },
  },
  {
    id: '16',
    type: 'phase',
    position: { x: 160, y: -3500 },
    data: { id: '16', minPoints: 48 },
  },
  {
    id: '17',
    type: 'phase',
    position: { x: 50, y: -3750 },
    data: { id: '17', minPoints: 51 },
  },
  {
    id: '18',
    type: 'phase',
    position: { x: -100, y: -4000 },
    data: { id: '18', minPoints: 54 },
  },
  {
    id: '19',
    type: 'phase',
    position: { x: -160, y: -4250 },
    data: { id: '19', minPoints: 57 },
  },
  {
    id: '20',
    type: 'phase',
    position: { x: 20, y: -4500 },
    data: { id: '20', minPoints: 60 },
  },
  {
    id: '21',
    type: 'phase',
    position: { x: -180, y: -4750 },
    data: { id: '21', minPoints: 63 },
  },
  {
    id: '22',
    type: 'phase',
    position: { x: -280, y: -5000 },
    data: { id: '22', minPoints: 66 },
  },
  {
    id: '23',
    type: 'phase',
    position: { x: -40, y: -5250 },
    data: { id: '23', minPoints: 69 },
  },
  {
    id: '24',
    type: 'phase',
    position: { x: 220, y: -5500 },
    data: { id: '24', minPoints: 72 },
  },
  {
    id: '25',
    type: 'phase',
    position: { x: 300, y: -5750 },
    data: { id: '25', minPoints: 75 },
  },
  {
    id: '26',
    type: 'phase',
    position: { x: 90, y: -6000 },
    data: { id: '26', minPoints: 78 },
  },
  {
    id: '27',
    type: 'phase',
    position: { x: -50, y: -6250 },
    data: { id: '27', minPoints: 81 },
  },
  {
    id: '28',
    type: 'phase',
    position: { x: -220, y: -6500 },
    data: { id: '28', minPoints: 84 },
  },
  {
    id: '29',
    type: 'phase',
    position: { x: -300, y: -6750 },
    data: { id: '29', minPoints: 87 },
  },
  {
    id: '30',
    type: 'phase',
    position: { x: -90, y: -7000 },
    data: { id: '30', minPoints: 90 },
  },
];

const nodeLastIndex = nodesPhases[nodesPhases.length - 1];
export const nodesLastPosition = nodeLastIndex.position.y - 200;
