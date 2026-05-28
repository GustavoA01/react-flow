import type { DescriptionCircleProps } from '@/data/types/components';
import { Circle } from 'lucide-react';

export const DescriptionCircle = ({
  right,
  left,
  className,
  textColor = 'zinc-500',
  fill = 'gray',
}: DescriptionCircleProps) => (
  <p
    className={`flex items-center text-${textColor} text-xs sm:text-sm gap-2 ${className}`}
  >
    <span className="line-clamp-1">{left}</span>
    <Circle className={`fill-${fill}`} fill={fill} size={4} />
    <span className="line-clamp-1">{right}</span>
  </p>
);
