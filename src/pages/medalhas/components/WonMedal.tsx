import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Trash2 } from 'lucide-react';

type WonMedalPropsType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
};

export const WonMedal = ({
  open,
  onOpenChange,
  onDelete,
}: WonMedalPropsType) => (
  <ContextMenu open={open} onOpenChange={onOpenChange}>
    <ContextMenuTrigger>
      <Card className="group cursor-pointer hover:scale-105 hover:shadow-primary transition-all duration-300">
        <CardContent className="space-y-2 select-none flex flex-col items-center">
          <img
            src={
              'https://res-console.cloudinary.com/dbyal02d7/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/Q2hhdEdQVF9JbWFnZV8yNl9kZV9hZ28uX2RlXzIwMjZfMTZfNDBfNDNfaTk1emVh/template_primary'
            }
            alt="Imagem medalha"
            className="w-20 h-20 sm:w-15 sm:h-15 rounded-full ring-2 ring-green-500 group-hover:ring-primary group-hover:-translate-y-1 transition-all duration-300"
          />
          <p className="text-center text-zinc-800 font-semibold font-montserrat line-clamp-2">
            PUC Minas
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-muted-foreground text-center text-sm">20 xp</p>
        </CardFooter>
      </Card>
    </ContextMenuTrigger>

    <ContextMenuContent>
      <ContextMenuItem
        variant="destructive"
        className="font-montserrat cursor-pointer"
        onClick={onDelete}
      >
        <Trash2 />
        Excluir
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);
