import type { MonitorType } from '@/data/types/api';

export const temporaryMonitores: MonitorType[] = [
  {
    id: 'monitor-1',
    nome: 'Maria Souza',
    senha: '123456',
    tipo: 'MONITOR',
    cursoIds: ['curso-calculo-1'],
  },
  {
    id: 'monitor-2',
    nome: 'Pedro Alves',
    senha: '123456',
    tipo: 'MONITOR',
    cursoIds: ['curso-prog-1'],
  },
  {
    id: 'monitor-3',
    nome: 'Ana Costa',
    senha: '123456',
    tipo: 'MONITOR',
    cursoIds: ['curso-fisica-1'],
  },
  {
    id: 'monitor-4',
    nome: 'Carlos Lima',
    senha: '123456',
    tipo: 'MONITOR',
    cursoIds: ['curso-bd-1'],
  },
];

export const getMonitorById = (id: string) =>
  temporaryMonitores.find((monitor) => monitor.id === id);

export const mockLoggedMonitor: MonitorType = temporaryMonitores[0];
