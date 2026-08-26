import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Crown, Medal } from 'lucide-react';
import { ChessQueen } from './ChessQueen';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { AlunoType } from '@/data/types/api';
import { useEffect, useRef } from 'react';

type RankItem = Pick<AlunoType, 'id' | 'apelido' | 'pontos' | 'imagemPerfil'> & {
  position: number;
};

type RanksListProps = {
  ranks: RankItem[];
  loggedAlunoId?: string;
};

const topRanksIcons = [
  <Crown className="text-emerald-500 fill-emerald-500" />,
  <ChessQueen color="gray" />,
  <Medal className="text-amber-700" />,
];

export const RanksList = ({ ranks, loggedAlunoId }: RanksListProps) => {
  const loggedRowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    loggedRowRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [loggedAlunoId]);

  return (
    <Table>
      <TableBody>
        {ranks.map(({ id, apelido, pontos, position, imagemPerfil }) => {
          const isTopRanks = [1, 2, 3].includes(position);
          const isLoggedAluno = id === loggedAlunoId;
          const iniciais = apelido.slice(0, 2).toUpperCase();

          return (
            <TableRow
              key={id}
              ref={isLoggedAluno ? loggedRowRef : undefined}
              className={cn(
                'h-12 font-montserrat',
                isLoggedAluno && 'bg-primary/10 hover:bg-primary/15'
              )}
            >
              <TableCell className="text-center w-10 font-bold text-gray-400">
                {isTopRanks ? topRanksIcons[position - 1] : `${position}°`}
              </TableCell>

              <TableCell>
                <Avatar>
                  <AvatarImage src={imagemPerfil} />
                  <AvatarFallback>{iniciais}</AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell
                className={cn(
                  'font-semibold max-w-40',
                  isTopRanks || isLoggedAluno ? 'text-black' : 'text-zinc-600'
                )}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span className="truncate">{apelido}</span>
                </span>
              </TableCell>

              <TableCell className="text-center">
                <span
                  className={cn(
                    'font-bold',
                    position === 1 ? 'text-emerald-500' : 'text-blue-600'
                  )}
                >
                  {pontos}
                </span>
                <span className="font-semibold text-zinc-400">xp</span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
