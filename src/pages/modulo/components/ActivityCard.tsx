import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import type { Atividade } from '@/data/types/api';
import { xpDaAtividade } from '@/data/temporaryMocks/cursos';
import { cn } from '@/lib/utils';
import { MAX_TENTATIVAS } from '@/data/constants';

type ActivityCardProps = {
  atividade: Atividade;
  tentativasUsadas: number;
  melhorPontuacao: number;
  onClick: () => void;
};

export const ActivityCard = ({
  atividade,
  tentativasUsadas,
  melhorPontuacao,
  onClick,
}: ActivityCardProps) => {
  const xpTotal = xpDaAtividade(atividade);
  const perguntasLabel = `${atividade.quantQuestoes} ${atividade.quantQuestoes === 1 ? 'PERGUNTA' : 'PERGUNTAS'}`;
  const tentativasLabel = `${tentativasUsadas}/${MAX_TENTATIVAS} tentativas`;
  const gabaritou = tentativasUsadas > 0 && melhorPontuacao >= xpTotal;
  const concluded = tentativasUsadas === MAX_TENTATIVAS || gabaritou;

  return (
    <Item
      onClick={onClick}
      className={cn(
        'border-2 rounded-lg hover:shadow-md transition-all duration-150 ease-in cursor-pointer',
        concluded ? 'border-green-200' : 'border-zinc-200'
      )}
    >
      <ItemMedia
        className={cn(
          'rounded-lg p-2',
          concluded ? 'bg-green-100 text-green-600' : 'bg-zinc-100 text-zinc-400'
        )}
      >
        <Check />
      </ItemMedia>

      <ItemContent className="min-w-0">
        <ItemTitle className="font-semibold sm:text-lg text-zinc-600 truncate max-w-full">
          {atividade.titulo}
        </ItemTitle>
        <ItemDescription className="flex flex-wrap items-center gap-x-1.5 font-semibold text-xs text-zinc-400">
          <span>{perguntasLabel}</span>
          <span aria-hidden>·</span>
          <span>{tentativasLabel}</span>
        </ItemDescription>
      </ItemContent>

      <ItemActions>
        <Badge className="font-bold px-2 py-1 text-xs sm:text-sm bg-zinc-100 text-zinc-500">
          + {xpTotal} pts
        </Badge>
      </ItemActions>
    </Item>
  );
};
