import { useParams } from 'react-router-dom';
import { CourseSharedHeader } from '@/components/Header/CourseSharedHeader';
import { getAtividadeById } from '@/data/temporaryMocks/cursos';
import { MonitoramentoContent } from './features/container/MonitoramentoContent';

export const ManagementPage = () => {
  const { cursoId, moduloId, atividadeId } = useParams();
  const activity =
    cursoId && moduloId && atividadeId
      ? getAtividadeById(cursoId, moduloId, atividadeId)
      : undefined;

  if (!activity) {
    return (
      <div className="flex flex-col h-dvh">
        <header className="bg-blue-puc px-4 pt-4 sm:px-8 sm:pt-8 pb-8">
          <CourseSharedHeader />
        </header>
        <p className="mt-8 text-center font-semibold text-zinc-500">
          Atividade não encontrada
        </p>
      </div>
    );
  }

  return <MonitoramentoContent activity={activity} />;
};
