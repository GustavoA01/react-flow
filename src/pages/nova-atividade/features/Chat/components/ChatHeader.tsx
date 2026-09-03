import { Button } from '@/components/ui/button';
import {
  DrawerClose,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { ChevronRight, Eraser } from 'lucide-react';

type ChatHeaderProps = {
  onClear: () => void;
  messagesLength: number;
};

export const ChatHeader = ({ onClear, messagesLength }: ChatHeaderProps) => (
  <DrawerHeader className="shadow-[0_4px_8px_-4px_rgba(0,0,0,0.2)]">
    <div className="grid grid-cols-[2.5rem_1fr_2.5rem] items-start gap-1">
      <DrawerClose asChild>
        <Button
          size="icon"
          title="Fechar"
          variant="ghost"
          aria-label="Fechar"
          className="rounded-full"
        >
          <ChevronRight size={24} />
        </Button>
      </DrawerClose>
      <div className="flex min-w-0 flex-col items-center text-center">
        <DrawerTitle>Gerador de atividades</DrawerTitle>
        <DrawerDescription>
          Crie atividades rapidamente usando IA
        </DrawerDescription>
      </div>
      {messagesLength > 0 && (
        <Button
          size="icon"
          variant="outline"
          onClick={onClear}
          title="Limpar conversa"
          className="justify-self-end rounded-full"
        >
          <Eraser />
        </Button>
      )}
    </div>
  </DrawerHeader>
);
