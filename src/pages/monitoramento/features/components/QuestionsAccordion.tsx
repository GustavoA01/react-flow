import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import type { QuestionStatType } from '../hooks/useActivityMonitor';

type QuestionsAccordionPropsType = {
  questionStats: QuestionStatType[];
};

const difficulty = (percent: number) => {
  if (percent >= 70)
    return { label: 'Tranquila', className: 'bg-green-100 text-green-700' };
  if (percent >= 40)
    return { label: 'Média', className: 'bg-amber-100 text-amber-700' };
  return { label: 'Difícil', className: 'bg-red-100 text-red-700' };
};

export const QuestionsAccordion = ({
  questionStats,
}: QuestionsAccordionPropsType) => (
  <section>
    <h2 className="font-fredoka text-lg font-semibold text-primary-dark mb-3">
      Por questão
    </h2>
    <Accordion type="multiple" className="rounded-xl border bg-white shadow-sm">
      {questionStats.map((item) => {
        const level = difficulty(item.accuracyPercent);
        const hasStrongDistractor = item.alternativeStats.some(
          (stat) => stat.isDistractor && stat.percent > item.accuracyPercent
        );

        return (
          <AccordionItem
            key={item.question.id}
            value={item.question.id}
            className="px-4"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 pr-2">
                <span className="font-montserrat font-semibold text-zinc-700">
                  Q{item.number}
                </span>
                <span className="text-zinc-400">·</span>
                <span className="text-sm text-zinc-500">
                  {item.accuracyPercent}% acertos
                </span>
                <Badge className={cn('border-none', level.className)}>
                  {level.label}
                </Badge>
                {hasStrongDistractor && (
                  <Badge className="border-none bg-orange-100 text-orange-700">
                    Distratora forte
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-sm font-medium text-zinc-600">
                {item.question.enunciado}
              </p>
              <div className="space-y-3">
                {item.alternativeStats.map((stat) => (
                  <div key={stat.alternative.id} className="space-y-1">
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <p
                        className={cn(
                          'min-w-0 font-medium',
                          stat.alternative.correta
                            ? 'text-green-700'
                            : 'text-zinc-600'
                        )}
                      >
                        <span className="mr-1.5 font-bold">{stat.letter}.</span>
                        {stat.alternative.descricao}
                        {stat.alternative.correta && (
                          <span className="ml-2 text-xs font-semibold">
                            correta
                          </span>
                        )}
                        {stat.isDistractor && !stat.alternative.correta && (
                          <span className="ml-2 text-xs font-semibold text-orange-600">
                            mais marcada entre as erradas
                          </span>
                        )}
                      </p>
                      <span className="shrink-0 text-xs font-semibold text-zinc-500">
                        {stat.votes} · {stat.percent}%
                      </span>
                    </div>
                    <Progress
                      value={stat.percent}
                      barColor={
                        stat.alternative.correta
                          ? 'bg-green-500'
                          : stat.isDistractor
                            ? 'bg-orange-400'
                            : 'bg-primary-light'
                      }
                      className="h-2 bg-zinc-100"
                    />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  </section>
);
