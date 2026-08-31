import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

type EditDeleteActionsProps = {
  label: string;
  onEdit: () => void;
  onDelete: () => void;
};

export const EditDeleteActions = ({
  label,
  onEdit,
  onDelete,
}: EditDeleteActionsProps) => (
  <>
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={`Editar ${label}`}
      className="rounded-full text-zinc-400 hover:text-primary hover:bg-primary/10"
      onClick={(event) => {
        event.stopPropagation();
        onEdit();
      }}
    >
      <Pencil />
    </Button>
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={`Excluir ${label}`}
      className="rounded-full text-zinc-400 hover:text-destructive hover:bg-destructive/10"
      onClick={(event) => {
        event.stopPropagation();
        onDelete();
      }}
    >
      <Trash2 />
    </Button>
  </>
);
