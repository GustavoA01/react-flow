import type {
  Alternativa,
  Atividade,
  Questao,
  Tentativa,
} from '@/data/types/api';
import {
  alunosDaTurma,
  ultimaTentativaPorAluno,
} from '@/data/temporaryMocks/tentativas';
import { xpDaAtividade } from '@/data/temporaryMocks/cursos';
import type { RankAluno } from '@/data/temporaryMocks/ranks';

export type AlternativeStatType = {
  alternative: Alternativa;
  letter: string;
  votes: number;
  percent: number;
  isDistractor: boolean;
};

export type QuestionStatType = {
  question: Questao;
  number: number;
  accuracyPercent: number;
  alternativeStats: AlternativeStatType[];
};

export type StudentRowType = {
  student: RankAluno;
  attempt?: Tentativa;
  answersByQuestion: (string | null)[];
};

export const alternativeLetter = (index: number) =>
  String.fromCharCode(65 + index);

export const useActivityMonitor = (activity: Atividade) => {
  const attempts = ultimaTentativaPorAluno(activity.id);
  const submissions = attempts.length;
  const classSize = alunosDaTurma.length;
  const totalXp = xpDaAtividade(activity);

  const averageScore =
    submissions === 0
      ? 0
      : Math.round(
          attempts.reduce((acc, attempt) => acc + attempt.pontuacaoObtida, 0) /
            submissions
        );

  const averageAccuracy =
    submissions === 0
      ? 0
      : Math.round(
          (attempts.reduce((acc, attempt) => {
            const correctCount = attempt.respostas.filter(
              (answer) => answer.correta
            ).length;
            return acc + correctCount / Math.max(activity.questoes.length, 1);
          }, 0) /
            submissions) *
            100
        );

  const questionStats: QuestionStatType[] = activity.questoes.map(
    (question, index) => {
      const votesByAlternative = question.alternativas.map(
        (alternative) =>
          attempts.filter((attempt) =>
            attempt.respostas.some(
              (answer) => answer.alternativaId === alternative.id
            )
          ).length
      );

      const correctAnswers = question.alternativas.reduce(
        (acc, alternative, alternativeIndex) => {
          return alternative.correta
            ? acc + votesByAlternative[alternativeIndex]
            : acc;
        },
        0
      );
      
      const accuracyPercent =
        submissions === 0
          ? 0
          : Math.round((correctAnswers / submissions) * 100);

      const maxWrongVotes = Math.max(
        0,
        ...question.alternativas.map((alternative, alternativeIndex) =>
          alternative.correta ? 0 : votesByAlternative[alternativeIndex]
        )
      );

      const alternativeStats: AlternativeStatType[] = question.alternativas.map(
        (alternative, alternativeIndex) => ({
          alternative,
          letter: alternativeLetter(alternativeIndex),
          votes: votesByAlternative[alternativeIndex],
          percent:
            submissions === 0
              ? 0
              : Math.round(
                  (votesByAlternative[alternativeIndex] / submissions) * 100
                ),
          isDistractor:
            !alternative.correta &&
            votesByAlternative[alternativeIndex] === maxWrongVotes &&
            maxWrongVotes > 0,
        })
      );

      return {
        question,
        number: index + 1,
        accuracyPercent,
        alternativeStats,
      };
    }
  );

  const studentRows: StudentRowType[] = alunosDaTurma.map((student) => {
    const attempt = attempts.find((current) => current.alunoId === student.id);
    const answersByQuestion = activity.questoes.map((question) => {
      const selectedAnswer = attempt?.respostas.find(
        (answer) => answer.questaoId === question.id
      );
      if (!selectedAnswer) return null;
      const alternativeIndex = question.alternativas.findIndex(
        (alternative) => alternative.id === selectedAnswer.alternativaId
      );
      return alternativeIndex >= 0 ? alternativeLetter(alternativeIndex) : null;
    });

    return { student, attempt, answersByQuestion };
  });

  return {
    classSize,
    submissions,
    totalXp,
    averageScore,
    averageAccuracy,
    questionStats,
    studentRows,
  };
};
