import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { temporaryRanks } from '@/data/temporaryMocks/ranks';
import { RankTableHeader } from '@/features/RanksTable/components/RankTableHeader';
import { RanksList } from '@/features/RanksTable/components/RanksList';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { useState } from 'react';

export const RankTable = () => {
  const { isDesktop } = useMediaDevice();
  const [selected, setSelected] = useState('Geral');

  if (!isDesktop) {
    return (
      <div
        style={{ maxHeight: 'calc(100dvh - 180px)' }}
        className="fixed m-5 z-50 flex flex-col w-80 bg-white border rounded-md shadow-lg"
      >
        <RankTableHeader selected={selected} setSelected={setSelected} />
        <div className="flex-1 scrollbar-hidden overflow-y-auto min-h-0 bg-white rounded-b-md">
          <RanksList ranks={temporaryRanks} />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ maxHeight: 'calc(100dvh - 180px)' }}
      className="fixed m-5 z-50 flex flex-col w-80 bg-white border rounded-md shadow-lg"
    >
      <Accordion type="single" defaultValue="ranking" collapsible>
        <AccordionItem value="ranking">
          <RankTableHeader
            isDesktop
            selected={selected}
            setSelected={setSelected}
          />
          <AccordionContent className="p-0">
            <div className="max-h-56 overflow-y-auto custom-bar min-h-0 bg-white border rounded-b-md">
              <RanksList ranks={temporaryRanks} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
