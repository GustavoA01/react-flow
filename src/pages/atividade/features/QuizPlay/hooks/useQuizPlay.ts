import { useMemo, useState } from 'react';
import type { AtividadeType, RespostaType } from '@/data/types/api';
import {
  registrarTentativa,
  temporaryTentativas,
} from '@/data/temporaryMocks/tentativas';
import {
  contarTentativasDoAluno,
  melhorPontuacaoDoAluno,
} from '@/data/tentativas';
import { xpDaAtividade } from '@/data/temporaryMocks/cursos';
import { useAuthUser } from '@/providers/UserProvider';
import { MAX_TENTATIVAS } from '@/data/constants';
import type { QuizPhaseType } from '@/pages/atividade/features/QuizPlay/types';

export type QuizAnswerType = {
  questaoId: string;
  alternativaId: string;
  correta: boolean;
  valor: number;
};

export const useQuizPlay = (activity: AtividadeType) => {
  const auth = useAuthUser();
  const alunoId = auth.isAluno ? auth.user.id : '';
  const countAttempts = () =>
    contarTentativasDoAluno(temporaryTentativas, alunoId, activity.id);

  const [phase, setPhase] = useState<QuizPhaseType>('answering');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<QuizAnswerType[]>([]);
  const [revealCorrect, setRevealCorrect] = useState(
    () => countAttempts() >= 1
  );
  const [attemptNumber, setAttemptNumber] = useState(() => countAttempts() + 1);

  const questions = activity.questoes;
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const totalXp = xpDaAtividade(activity);

  const score = useMemo(
    () =>
      answers.reduce(
        (sum, answer) => sum + (answer.correta ? answer.valor : 0),
        0
      ),
    [answers]
  );

  const selectedAlternative = currentQuestion?.alternativas.find(
    (item) => item.id === selectedId
  );
  const correctAlternative = currentQuestion?.alternativas.find(
    (item) => item.correta
  );
  const selectedIsCorrect = Boolean(selectedAlternative?.correta);

  const progressPercent =
    phase === 'summary'
      ? 100
      : Math.round(
          ((currentIndex + (phase === 'feedback' ? 1 : 0)) /
            Math.max(totalQuestions, 1)) *
            100
        );

  const persistAttempt = (finalAnswers: QuizAnswerType[]) => {
    if (!auth.isAluno) return;

    const pontuacaoObtida = finalAnswers.reduce(
      (sum, answer) => sum + (answer.correta ? answer.valor : 0),
      0
    );
    const previousBest = melhorPontuacaoDoAluno(
      temporaryTentativas,
      auth.user.id,
      activity.id
    );
    const respostas: RespostaType[] = finalAnswers.map((answer) => ({
      id: crypto.randomUUID(),
      questaoId: answer.questaoId,
      alternativaId: answer.alternativaId,
      correta: answer.correta,
    }));

    registrarTentativa(auth.user.id, activity.id, pontuacaoObtida, respostas);

    const gained = Math.max(0, pontuacaoObtida - previousBest);
    if (gained > 0) {
      auth.setUser({ ...auth.user, pontos: auth.user.pontos + gained });
    }
  };

  const selectAlternative = (id: string) => {
    if (phase !== 'answering') return;
    setSelectedId(id);
  };

  const checkAnswer = () => {
    if (phase !== 'answering' || !selectedId || !currentQuestion) return;

    const alternative = currentQuestion.alternativas.find(
      (item) => item.id === selectedId
    );

    if (!alternative) return;

    setAnswers((prev) => [
      ...prev,
      {
        questaoId: currentQuestion.id,
        alternativaId: alternative.id,
        correta: alternative.correta,
        valor: currentQuestion.valor,
      },
    ]);
    setPhase('feedback');
  };

  const goNext = () => {
    if (phase !== 'feedback') return;

    if (isLastQuestion) {
      persistAttempt(answers);
      setPhase('summary');
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedId(null);
    setPhase('answering');
  };

  const canRetry =
    phase === 'summary' && countAttempts() < MAX_TENTATIVAS && score < totalXp;

  const retry = () => {
    const hasBoasted = score >= totalXp;
    const retryLimit = countAttempts() >= MAX_TENTATIVAS;

    if (retryLimit || hasBoasted) return;

    setRevealCorrect(countAttempts() >= 1);
    setAttemptNumber(countAttempts() + 1);
    setPhase('answering');
    setCurrentIndex(0);
    setSelectedId(null);
    setAnswers([]);
  };

  return {
    phase,
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedId,
    selectedIsCorrect,
    correctAlternative,
    answers,
    score,
    totalXp,
    revealCorrect,
    isLastQuestion,
    progressPercent,
    attemptNumber,
    canRetry,
    selectAlternative,
    checkAnswer,
    goNext,
    retry,
  };
};
