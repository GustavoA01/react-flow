import { Progress } from '@/components/ui/progress';
import type { AlternativeStatType } from '../features/hooks/useActivityMonitor';
import { cn } from '@/lib/utils';

export const IncorrectsPercent = ({ stat }: { stat: AlternativeStatType }) => (
  <div key={stat.alternative.id} className="space-y-1">
    <div className="flex items-center justify-between gap-2 text-sm">
      <p
        className={cn(
          'min-w-0 font-medium',
          stat.alternative.correta ? 'text-green-700' : 'text-zinc-600'
        )}
      >
        <span className="mr-1.5 font-bold">{stat.letter}.</span>
        {stat.alternative.descricao}
        {stat.alternative.correta && (
          <span className="ml-2 text-xs font-semibold">correta</span>
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
);
