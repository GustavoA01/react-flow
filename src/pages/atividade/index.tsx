import { Navigate, useParams } from 'react-router-dom';
import { CourseSharedHeader } from '@/components/Header/CourseSharedHeader';
import { getAtividadeById, xpDaAtividade } from '@/data/temporaryMocks/cursos';
import { temporaryTentativas } from '@/data/temporaryMocks/tentativas';
import {
  contarTentativasDoAluno,
  melhorPontuacaoDoAluno,
} from '@/data/tentativas';
import { useAuthUser } from '@/providers/UserProvider';
import { MAX_TENTATIVAS } from '@/data/constants';
import { QuizPlay } from './features/QuizPlay/container/QuizPlay';
import { ActivityConcluded } from './components/ActivityConcluded';

export const ActivityPage = () => {
  const { cursoId, moduloId, atividadeId } = useParams();
  const auth = useAuthUser();
  const validIds = cursoId && moduloId && atividadeId;
  const activity = validIds ? getAtividadeById(cursoId, moduloId, atividadeId) : undefined;

  if (auth.isMonitor && validIds) {
    return (
      <Navigate
        to={`/cursos/${cursoId}/modulos/${moduloId}/monitoramento/${atividadeId}`}
        replace
      />
    );
  }

  if (!activity) {
    return (
      <div className="flex h-dvh flex-col">
        <header className="bg-blue-puc px-4 pt-4 pb-8 sm:px-8 sm:pt-8">
          <CourseSharedHeader />
        </header>
        <p className="mt-8 text-center font-semibold text-zinc-500">
          Atividade não encontrada
        </p>
      </div>
    );
  }

  const alunoId = auth.user.id;
  const tentativasUsadas = contarTentativasDoAluno(
    temporaryTentativas,
    alunoId,
    activity.id
  );
  const bestScore = melhorPontuacaoDoAluno(
    temporaryTentativas,
    alunoId,
    activity.id
  );
  const totalXp = xpDaAtividade(activity);
  const hasBoasted = tentativasUsadas > 0 && bestScore >= totalXp;
  const concluded = tentativasUsadas === MAX_TENTATIVAS || hasBoasted;

  if (concluded) {
    return (
      <ActivityConcluded
        activity={activity}
        bestScore={bestScore}
        totalXp={totalXp}
      />
    );
  }

  return <QuizPlay activity={activity} />;
};
