import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { useAuthUser } from '@/providers/UserProvider';

export const usePhaseNode = (minPoints: number) => {
  const { user, isAluno: isInteractive } = useAuthUser();
  const [openDialog, setOpenDialog] = useState(false);

  const points = isInteractive ? user.pontos : 0;
  const isLocked = isInteractive && points < minPoints;
  const Icon = isLocked || !isInteractive ? Star : Check;
  const baseBgClass =
    isLocked || !isInteractive ? 'bg-primary' : 'bg-green-500';
  const shineClass = 'bg-gradient-to-b from-white/40 to-transparent opacity-70';
  const overlayGradientClass =
    isLocked || !isInteractive
      ? 'bg-primary ring-1 ring-inset ring-black/10'
      : 'bg-gradient-to-b from-green-500/80 to-green-500 ring-1 ring-inset ring-black/10';
  const iconClassName =
    isLocked || !isInteractive ? 'text-white' : 'text-green-900';

  return {
    openDialog,
    setOpenDialog,
    isInteractive,
    points,
    isLocked,
    baseBgClass,
    shineClass,
    overlayGradientClass,
    Icon,
    iconClassName,
  };
};
