import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { temporaryRanks } from '@/data/temporaryMocks/ranks';
import { RankTableHeader } from '@/features/RanksTable/components/RankTableHeader';
import { RanksList } from '@/features/RanksTable/components/RanksList';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { useAuthUser } from '@/providers/UserProvider';
import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';

type RankTableProps = {
  floating?: boolean;
};

const mockItens = ['Geral', 'Programação', 'Matemática e programação avançada'];

export const RankTable = ({ floating = true }: RankTableProps) => {
  const { isDesktop } = useMediaDevice();
  const auth = useAuthUser();
  const [selected, setSelected] = useState('Geral');
  const loggedAlunoId = auth.isAluno ? auth.user.id : undefined;

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

  const shellClassName = cn(
    'flex flex-col w-80 bg-white border rounded-md shadow-lg',
    floating ? 'fixed m-5 z-50' : 'relative max-h-full'
  );

  const maxHeight = floating ? 'calc(100dvh - 180px)' : 'calc(100dvh - 14rem)';

  if (!isDesktop) {
    return (
      <div style={{ maxHeight }} className={shellClassName}>
        <RankTableHeader
          selected={selected}
          setSelected={setSelected}
          items={mockItens}
        />
        <div className="flex-1 scrollbar-hidden overflow-y-auto min-h-0 bg-white rounded-b-md">
          <RanksList
            ranks={ranks}
            ref={scrollToLoggedRow}
            loggedAlunoId={loggedAlunoId}
            showName={auth.isMonitor}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxHeight }} className={shellClassName}>
      <Accordion type="single" defaultValue="ranking" collapsible>
        <AccordionItem value="ranking">
          <RankTableHeader
            isDesktop
            items={mockItens}
            selected={selected}
            setSelected={setSelected}
          />
          <AccordionContent className="p-0">
            <div className="max-h-56 overflow-y-auto custom-bar min-h-0 bg-white border rounded-b-md">
              <RanksList
                ranks={ranks}
                ref={scrollToLoggedRow}
                loggedAlunoId={loggedAlunoId}
                showName={auth.isMonitor}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
