import { Navigate, useParams } from 'react-router-dom';
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
import { ResourceNotFound } from '@/components/ResourceNotFound';

export const ActivityPage = () => {
  const { cursoId, moduloId, atividadeId } = useParams();
  const auth = useAuthUser();
  const validIds = cursoId && moduloId && atividadeId;
  const activity = validIds
    ? getAtividadeById(cursoId, moduloId, atividadeId)
    : undefined;

  if (auth.isMonitor && validIds) {
    return (
      <Navigate
        to={`/cursos/${cursoId}/modulos/${moduloId}/monitoramento/${atividadeId}`}
        replace
      />
    );
  }

  if (!activity) return <ResourceNotFound label="Atividade não encontrada" />;

  const studentId = auth.user.id;
  const usedAttempts = contarTentativasDoAluno(
    temporaryTentativas,
    studentId,
    activity.id
  );
  const bestScore = melhorPontuacaoDoAluno(
    temporaryTentativas,
    studentId,
    activity.id
  );
  const totalXp = xpDaAtividade(activity);
  const hasBoasted = usedAttempts > 0 && bestScore >= totalXp;
  const hasConcluded = usedAttempts === MAX_TENTATIVAS || hasBoasted;

  if (hasConcluded) {
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
