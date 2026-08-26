import { ModuloHeader } from './components/ModuloHeader';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { ActivityCard } from './components/ActivityCard';
import { useState } from 'react';
import { NewActivityDialog } from './features/NewActivityDialog/container/NewActivityDialog';
import { useNavigate, useParams } from 'react-router-dom';
import { getModuloById } from '@/data/temporaryMocks/cursos';
import { contarTentativasDoAluno, melhorPontuacaoDoAluno } from '@/data/temporaryMocks/tentativas';
import { CourseSharedHeader } from '@/components/CourseSharedHeader';

export const ModulePage = () => {
  const { containerClassName } = useMediaDevice();
  const [openActivityDialog, setOpenActivityDialog] = useState(false);
  const navigate = useNavigate();
  const { cursoId, moduloId } = useParams();
  const modulo =
    cursoId && moduloId ? getModuloById(cursoId, moduloId) : undefined;

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
          setOpenActivityDialog={setOpenActivityDialog}
        />

        <div
          className={`flex flex-col max-sm:pb-20 custom-bar gap-4 overflow-auto ${containerClassName}`}
        >
          {modulo.atividades.map((atividade) => (
            <ActivityCard
              key={atividade.id}
              atividade={atividade}
              tentativasUsadas={contarTentativasDoAluno(atividade.id)}
              melhorPontuacao={melhorPontuacaoDoAluno(atividade.id)}
              onClick={() =>
                navigate(
                  `/cursos/${cursoId}/modulos/${moduloId}/monitoramento/${atividade.id}`
                )
              }
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
