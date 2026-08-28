import { useParams } from 'react-router-dom';
import { getAtividadeById } from '@/data/temporaryMocks/cursos';
import { MonitoramentoContent } from './components/MonitoramentoContent';
import { ResourceNotFound } from '@/components/ResourceNotFound';

export const ManagementPage = () => {
  const { cursoId, moduloId, atividadeId } = useParams();
  const activity =
    cursoId && moduloId && atividadeId
      ? getAtividadeById(cursoId, moduloId, atividadeId)
      : null;

  if (!activity) return <ResourceNotFound label="Atividade não encontrada" />;

  return <MonitoramentoContent activity={activity} />;
};
