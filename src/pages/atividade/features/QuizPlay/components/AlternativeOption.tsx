import { cn } from '@/lib/utils';
import type { AlternativeStatusType } from '@/pages/atividade/features/QuizPlay/types';

type AlternativeOptionPropsType = {
  letter: string;
  description: string;
  selected: boolean;
  disabled: boolean;
  status: AlternativeStatusType;
  onSelect: () => void;
};

const styleByStatus: Record<
  AlternativeStatusType,
  { button: string; badge: string; text: string }
> = {
  unselected: {
    button:
      'border-zinc-200 bg-white hover:border-primary/50 hover:bg-primary/5',
    badge: 'bg-zinc-100 text-zinc-600',
    text: 'text-zinc-700',
  },
  selected: {
    button: 'border-primary bg-primary/10 shadow-sm',
    badge: 'bg-primary text-white',
    text: 'text-zinc-700',
  },
  correct: {
    button: 'border-emerald-500 bg-emerald-50',
    badge: 'bg-emerald-500 text-white',
    text: 'text-emerald-800',
  },
  wrong: {
    button: 'border-red-400 bg-red-50',
    badge: 'bg-red-500 text-white',
    text: 'text-red-800',
  },
  reveal: {
    button: 'border-emerald-400 bg-emerald-50/80',
    badge: 'bg-emerald-500 text-white',
    text: 'text-emerald-800',
  },
};

export const AlternativeOption = ({
  letter,
  description,
  selected,
  disabled,
  status,
  onSelect,
}: AlternativeOptionPropsType) => {
  const style = styleByStatus[status];

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={onSelect}
      className={cn(
        'flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left font-montserrat transition-all duration-150',
        'disabled:cursor-default',
        style.button,
        status === 'unselected' && disabled && 'opacity-60'
      )}
    >
      <span
        className={cn(
          'flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold',
          style.badge
        )}
      >
        {letter}
      </span>
      <span className={cn('text-sm sm:text-base font-medium', style.text)}>
        {description}
      </span>
    </button>
  );
};
