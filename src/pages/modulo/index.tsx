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
import { CourseSharedHeader } from '@/components/Header/CourseSharedHeader';
import { useAuthUser } from '@/providers/UserProvider';
import { cn } from '@/lib/utils';

export const ModulePage = () => {
  const { isAluno, isMonitor, user } = useAuthUser();
  const { containerClassName } = useMediaDevice();
  const [openActivityDialog, setOpenActivityDialog] = useState(false);
  const navigate = useNavigate();
  const { cursoId, moduloId } = useParams();
  const modulo =
    cursoId && moduloId ? getModuloById(cursoId, moduloId) : undefined;

  const onClickActivity = (activityId: string) => {
    if (isMonitor) {
      navigate(
        `/cursos/${cursoId}/modulos/${moduloId}/monitoramento/${activityId}`
      );
    } else {
      navigate(
        `/cursos/${cursoId}/modulos/${moduloId}/atividade/${activityId}`
      );
    }
  };

  if (!modulo) {
    return (
      <div className="flex flex-col h-dvh">
        <header className="bg-blue-puc px-4 pt-4 sm:px-8 sm:pt-8 pb-8">
          <CourseSharedHeader />
        </header>
        <p className="mt-8 text-center font-semibold text-zinc-500">
          Módulo não encontrado
        </p>
      </div>
    );
  }

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
              atividade={atividade}
              onClick={() => onClickActivity(atividade.id)}
              tentativasUsadas={contarTentativasDoAluno(
                temporaryTentativas,
                user.id,
                atividade.id
              )}
              melhorPontuacao={melhorPontuacaoDoAluno(
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
