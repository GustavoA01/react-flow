import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

type DescriptionCirclePropsType = {
  right: string;
  left: string;
  className?: string;
};

export const DescriptionCircle = ({
  right,
  left,
  className,
}: DescriptionCirclePropsType) => (
  <p
    className={cn(
      'flex items-center gap-2 text-xs text-zinc-500 sm:text-sm',
      className
    )}
  >
    <span className="line-clamp-1">{left}</span>
    <Circle fill="currentColor" size={4} />
    <span className="line-clamp-1">{right}</span>
  </p>
);
