import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { RankTableHeader } from '@/features/RanksTable/components/RankTableHeader';
import { RanksList } from '@/features/RanksTable/components/RanksList';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { useRanksTable } from '../hooks/useRanksTable';

type RankTableProps = {
  floating?: boolean;
};

const mockItens = ['Geral', 'Programação', 'Matemática e programação avançada'];

export const RankTable = ({ floating = true }: RankTableProps) => {
  const { isDesktop } = useMediaDevice();
  const {
    isMonitor,
    selected,
    setSelected,
    loggedAlunoId,
    scrollToLoggedRow,
    ranks,
    shellClassName,
    maxHeight,
  } = useRanksTable({ floating });

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
            showName={isMonitor}
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
                showName={isMonitor}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
