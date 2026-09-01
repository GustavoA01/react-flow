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
import { Spinner } from '@/components/ui/spinner';
import { useAddMedalDialog } from '../hooks/useAddMedalDialog';

type AddMedalDialogPropsType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AddMedalDialog = ({
  open,
  onOpenChange,
}: AddMedalDialogPropsType) => {
  const { register, onSubmit, errors, isSubmitting, handleOpenChange } =
    useAddMedalDialog(onOpenChange);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar medalha</DialogTitle>
          <DialogDescription>
            Cadastre uma medalha do catálogo com nome, pontos mínimos e imagem.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={onSubmit}>
          <LabelInput
            label="Nome"
            id="nome"
            autoFocus
            placeholder="Ex.: PUC Minas"
            error={errors.nome?.message}
            register={register}
            disabled={isSubmitting}
          />
          <LabelInput
            label="Pontos mínimos"
            id="pontosMin"
            type="number"
            min={0}
            placeholder="0"
            error={errors.pontosMin?.message}
            register={register}
            registerOptions={{ setValueAs: Number }}
            disabled={isSubmitting}
          />
          <LabelInput
            label="Imagem"
            id="imagem"
            type="file"
            accept="image/*"
            error={errors.imagem?.message}
            register={register}
            disabled={isSubmitting}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSubmitting}>
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : 'Adicionar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
