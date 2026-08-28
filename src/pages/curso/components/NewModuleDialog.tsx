import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ErrorFormMessage } from '@/components/ErrorFormMessage';
import { useNewModuleDialog } from '../hooks/useNewModuleDialog';

type NewModuleDialogPropsType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const NewModuleDialog = ({
  open,
  onOpenChange,
}: NewModuleDialogPropsType) => {
  const { register, onSubmit, errors, handleOpenChange } =
    useNewModuleDialog(onOpenChange);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo módulo</DialogTitle>
          <DialogDescription>
            Informe o nome do módulo para adicioná-lo ao curso.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              autoFocus
              className="mt-1.5"
              placeholder="Ex.: Derivadas"
              {...register('nome')}
            />
            {errors.nome?.message && (
              <ErrorFormMessage message={errors.nome.message} />
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
