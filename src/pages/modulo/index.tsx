import { ModuloHeader } from './components/ModuloHeader';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { ActivityCard } from './components/ActivityCard';
import { useState } from 'react';
import { NewActivityDialog } from './features/NewActivityDialog/container/NewActivityDialog';
import { useNavigate, useParams } from 'react-router-dom';
import { getModuloById } from '@/data/temporaryMocks/cursos';
import { temporaryTentativas } from '@/data/temporaryMocks/tentativas';
import {
  contarTentativasDoAluno,
  melhorPontuacaoDoAluno,
} from '@/data/tentativas';
import { useAuthUser } from '@/providers/UserProvider';
import { cn } from '@/lib/utils';
import { ResourceNotFound } from '@/components/ResourceNotFound';

export const ModulePage = () => {
  const navigate = useNavigate();
  const { cursoId, moduloId } = useParams();
  const { isAluno, isMonitor, user } = useAuthUser();
  const { containerClassName } = useMediaDevice();
  const [openActivityDialog, setOpenActivityDialog] = useState(false);
  const modulo =
    cursoId && moduloId ? getModuloById(cursoId, moduloId) : undefined;

  const onClickActivity = (activityId: string) => {
    const basePath = `/cursos/${cursoId}/modulos/${moduloId}`;
    if (isMonitor) navigate(`${basePath}/monitoramento/${activityId}`);
    else navigate(`${basePath}/atividade/${activityId}`);
  };

  if (!modulo) return <ResourceNotFound label="Módulo não encontrado" />;

  return (
    <>
      <div className="flex flex-col h-dvh overflow-hidden">
        <ModuloHeader
          modulo={modulo}
          isAluno={isAluno}
          isMonitor={isMonitor}
          setOpenActivityDialog={setOpenActivityDialog}
        />

        <div
          className={cn(
            'flex flex-col max-sm:pb-20 custom-bar gap-4 overflow-auto',
            containerClassName
          )}
        >
          {modulo.atividades.map((atividade) => (
            <ActivityCard
              key={atividade.id}
              activity={atividade}
              isMonitor={isMonitor}
              onClick={() => onClickActivity(atividade.id)}
              onEdit={() =>
                console.log({ action: 'edit-activity', id: atividade.id })
              }
              onDelete={() =>
                console.log({ action: 'delete-activity', id: atividade.id })
              }
              usedAttempts={contarTentativasDoAluno(
                temporaryTentativas,
                user.id,
                atividade.id
              )}
              bestScore={melhorPontuacaoDoAluno(
                temporaryTentativas,
                user.id,
                atividade.id
              )}
            />
          ))}
        </div>
      </div>

      <NewActivityDialog
        openActivityDialog={openActivityDialog}
        setOpenActivityDialog={setOpenActivityDialog}
      />
    </>
  );
};
