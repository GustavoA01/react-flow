import { Button } from '@/components/ui/button';
import type { QuestaoType } from '@/data/types/api';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { QuizAnswerType } from '../hooks/useQuizPlay';

type QuizSummaryPropsType = {
  questions: QuestaoType[];
  answers: QuizAnswerType[];
  score: number;
  totalXp: number;
  revealCorrect: boolean;
  canRetry: boolean;
  onRetry: () => void;
};

export const QuizSummary = ({
  questions,
  answers,
  score,
  totalXp,
  revealCorrect,
  canRetry,
  onRetry,
}: QuizSummaryPropsType) => {
  const navigate = useNavigate();
  const { cursoId, moduloId } = useParams();
  const gabaritou = score >= totalXp;
  const correctCount = answers.filter((answer) => answer.correta).length;

  return (
    <div className="container mx-auto flex min-h-0 flex-1 flex-col overflow-y-auto custom-bar px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-xl space-y-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Resultado
          </p>
          <h2 className="mt-2 font-fredoka text-3xl font-semibold text-primary-dark">
            {gabaritou ? 'Gabaritou!' : 'Tentativa concluída'}
          </h2>
          <p className="mt-2 font-montserrat text-zinc-600">
            {correctCount} de {questions.length} certas · {score}/{totalXp} pts
          </p>
        </div>

        <ul className="space-y-3">
          {questions.map((question, index) => {
            const answer = answers.find(
              (item) => item.questaoId === question.id
            );
            const chosen = question.alternativas.find(
              (item) => item.id === answer?.alternativaId
            );
            const correct = question.alternativas.find((item) => item.correta);

            return (
              <li
                key={question.id}
                className={cn(
                  'rounded-2xl border-2 p-4',
                  answer?.correta
                    ? 'border-emerald-200 bg-emerald-50/60'
                    : 'border-red-200 bg-red-50/60'
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      'mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-white',
                      answer?.correta ? 'bg-emerald-500' : 'bg-red-500'
                    )}
                  >
                    {answer?.correta ? (
                      <Check className="size-4" />
                    ) : (
                      <X className="size-4" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-zinc-400">
                      Pergunta {index + 1}
                    </p>
                    <p className="font-medium text-zinc-800">
                      {question.enunciado}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Sua resposta: {chosen?.descricao ?? '—'}
                    </p>
                    {revealCorrect && !answer?.correta && correct && (
                      <p className="mt-1 text-sm font-medium text-emerald-800">
                        Gabarito: {correct.descricao}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-2 pb-4">
          {canRetry && (
            <Button size="lg" className="h-12 font-bold" onClick={onRetry}>
              Tentar de novo
            </Button>
          )}
          <Button
            size="lg"
            variant={canRetry ? 'outline' : 'default'}
            className="h-12 font-bold"
            onClick={() => navigate(`/cursos/${cursoId}/modulos/${moduloId}`)}
          >
            Voltar ao módulo
          </Button>
        </div>
      </div>
    </div>
  );
};
