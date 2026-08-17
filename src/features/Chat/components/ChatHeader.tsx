import { Button } from '@/components/ui/button';
import {
  DrawerClose,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { ChevronRight, Eraser } from 'lucide-react';

type ChatHeaderProps = {
  isDesktop: boolean;
  onClear: () => void;
};

export const ChatHeader = ({ isDesktop, onClear }: ChatHeaderProps) => (
  <DrawerHeader className="shadow-[0_4px_8px_-4px_rgba(0,0,0,0.2)] max-sm:text-center">
    <div className="flex items-center justify-between relative">
      {!isDesktop && (
        <DrawerClose asChild>
          <Button size="icon" variant="ghost" aria-label="Fechar">
            <ChevronRight />
          </Button>
        </DrawerClose>
      )}
      <DrawerTitle
        className={isDesktop ? undefined : 'absolute left-1/2 -translate-x-1/2'}
      >
        Gerador de atividades
      </DrawerTitle>
      <Button onClick={onClear} size="icon" variant="outline" className={'max-sm:ml-auto'}>
        <Eraser className="text-destructive" />
      </Button>
    </div>
    <DrawerDescription>Crie atividades rapidamente usando IA</DrawerDescription>
  </DrawerHeader>
);
