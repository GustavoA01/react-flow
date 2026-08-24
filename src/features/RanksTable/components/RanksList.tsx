import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Crown, Medal } from 'lucide-react';
import { ChessQueen } from './ChessQueen';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { Aluno } from '@/data/types/api';

export type RankItem = Pick<Aluno, 'id' | 'apelido' | 'pontos'> & {
  position: number;
};

type RanksListProps = {
  ranks: RankItem[];
};

const topRanksIcons = [
  <Crown className="text-emerald-500 fill-emerald-500" />,
  <ChessQueen color="gray" />,
  <Medal className="text-amber-700" />,
];

const userImgAvatar = '';

export const RanksList = ({ ranks }: RanksListProps) => {
  return (
    <Table>
      <TableBody>
        {ranks.map(({ id, apelido, pontos, position }) => {
          const isTopRanks = [1, 2, 3].includes(position);
          const iniciais = apelido.slice(0, 2).toUpperCase();

          return (
            <TableRow key={id} className="h-12 font-montserrat">
              <TableCell className="text-center w-10 font-bold text-gray-400">
                {isTopRanks ? topRanksIcons[position - 1] : `${position}°`}
              </TableCell>

              <TableCell>
                <Avatar>
                  <AvatarImage src={userImgAvatar || ''} alt="avatar-img" />
                  <AvatarFallback>{iniciais}</AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell
                className={cn(
                  'font-semibold max-w-40 truncate',
                  isTopRanks ? 'text-black' : 'text-zinc-600'
                )}
              >
                {apelido}
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
