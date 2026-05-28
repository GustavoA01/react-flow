import { useState } from 'react';
import { points } from './useMap';
import { Check, Star } from 'lucide-react';

export const usePhaseNode = (minPoints: number) => {
  const [openDialog, setCloseDialog] = useState(false);

  const isLocked = points < minPoints;

  const Icon = isLocked ? Star : Check;
  const baseBgClass = isLocked ? 'bg-primary' : 'bg-green-500';
  const shineClass = 'bg-gradient-to-b from-white/40 to-transparent opacity-70';
  const overlayGradientClass = isLocked
    ? 'bg-primaryring-1 ring-inset ring-black/10'
    : 'bg-gradient-to-b from-green-500/80 to-green-500 ring-1 ring-inset ring-black/10';
  const iconClassName = isLocked ? 'text-white' : 'text-green-900';

  return {
    openDialog,
    setCloseDialog,
    isLocked,
    baseBgClass,
    shineClass,
    overlayGradientClass,
    Icon,
    iconClassName,
  };
};
