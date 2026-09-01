import { temporaryRanks } from '@/data/temporaryMocks/ranks';
import { cn } from '@/lib/utils';
import { useAuthUser } from '@/providers/UserProvider';
import { useCallback, useState } from 'react';

type UseRanksTableProps = {
  floating?: boolean;
};

export const useRanksTable = ({ floating }: UseRanksTableProps) => {
  const auth = useAuthUser();
  const [selected, setSelected] = useState('Geral');

  const loggedAlunoId = auth.isAluno ? auth.user.id : undefined;

  const shellClassName = cn(
    'flex flex-col w-80 bg-white border rounded-md shadow-lg',
    floating ? 'fixed m-5 z-50' : 'relative max-h-full'
  );

  const maxHeight = floating ? 'calc(100dvh - 180px)' : 'calc(100dvh - 14rem)';

  const scrollToLoggedRow = useCallback((node: HTMLTableRowElement | null) => {
    if (!node) return;
    requestAnimationFrame(() => {
      node.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    });
  }, []);

  const ranks = [...temporaryRanks]
    .sort((a, b) => b.pontos - a.pontos)
    .map((rank, index) => ({
      ...rank,
      position: index + 1,
    }));

  return {
    selected,
    setSelected,
    loggedAlunoId,
    scrollToLoggedRow,
    ranks,
    shellClassName,
    maxHeight,
    isMonitor: auth.isMonitor,
  };
};
