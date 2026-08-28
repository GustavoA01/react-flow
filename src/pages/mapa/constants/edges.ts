import { CustomEdge } from '@/pages/mapa/components/trail/CustomEdge';
import type { PhaseEdgeType } from '@/data/types/reactFlow';

export const edgeTypes = {
  'custom-edge': CustomEdge,
};

export const edgesPhases: PhaseEdgeType[] = [
  { id: '1-2', source: '1', target: '2', type: 'custom-edge' },
  { id: '2-3', source: '2', target: '3', type: 'custom-edge' },
  { id: '3-4', source: '3', target: '4', type: 'custom-edge' },
  { id: '4-5', source: '4', target: '5', type: 'custom-edge' },
  { id: '5-6', source: '5', target: '6', type: 'custom-edge' },
  { id: '6-7', source: '6', target: '7', type: 'custom-edge' },
  { id: '7-8', source: '7', target: '8', type: 'custom-edge' },
  { id: '8-9', source: '8', target: '9', type: 'custom-edge' },
  { id: '9-10', source: '9', target: '10', type: 'custom-edge' },
  { id: '10-11', source: '10', target: '11', type: 'custom-edge' },
  { id: '11-12', source: '11', target: '12', type: 'custom-edge' },
  { id: '12-13', source: '12', target: '13', type: 'custom-edge' },
  { id: '13-14', source: '13', target: '14', type: 'custom-edge' },
  { id: '14-15', source: '14', target: '15', type: 'custom-edge' },
  { id: '15-16', source: '15', target: '16', type: 'custom-edge' },
  { id: '16-17', source: '16', target: '17', type: 'custom-edge' },
  { id: '17-18', source: '17', target: '18', type: 'custom-edge' },
  { id: '18-19', source: '18', target: '19', type: 'custom-edge' },
  { id: '19-20', source: '19', target: '20', type: 'custom-edge' },
  { id: '20-21', source: '20', target: '21', type: 'custom-edge' },
  { id: '21-22', source: '21', target: '22', type: 'custom-edge' },
  { id: '22-23', source: '22', target: '23', type: 'custom-edge' },
  { id: '23-24', source: '23', target: '24', type: 'custom-edge' },
  { id: '24-25', source: '24', target: '25', type: 'custom-edge' },
  { id: '25-26', source: '25', target: '26', type: 'custom-edge' },
  { id: '26-27', source: '26', target: '27', type: 'custom-edge' },
  { id: '27-28', source: '27', target: '28', type: 'custom-edge' },
  { id: '28-29', source: '28', target: '29', type: 'custom-edge' },
  { id: '29-30', source: '29', target: '30', type: 'custom-edge' },
];
