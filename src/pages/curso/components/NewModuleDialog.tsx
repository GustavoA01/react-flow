import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LabelInput } from '@/components/LabelInput';
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
          <LabelInput
            label="Nome"
            id="nome"
            autoFocus
            placeholder="Ex.: Derivadas"
            error={errors.nome?.message}
            register={register}
          />

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
