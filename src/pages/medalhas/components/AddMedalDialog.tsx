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
import { useAddMedalDialog } from '../hooks/useAddMedalDialog';

type AddMedalDialogPropsType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AddMedalDialog = ({
  open,
  onOpenChange,
}: AddMedalDialogPropsType) => {
  const { register, onSubmit, errors, handleOpenChange } =
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
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              autoFocus
              className="mt-1.5"
              placeholder="Ex.: PUC Minas"
              {...register('nome')}
            />
            {errors.nome?.message && (
              <ErrorFormMessage message={errors.nome.message} />
            )}
          </div>

          <div>
            <Label htmlFor="pontosMin">Pontos mínimos</Label>
            <Input
              id="pontosMin"
              type="number"
              min={0}
              className="mt-1.5"
              placeholder="0"
              {...register('pontosMin', {
                setValueAs: (value) => Number(value),
              })}
            />
            {errors.pontosMin?.message && (
              <ErrorFormMessage message={errors.pontosMin.message} />
            )}
          </div>

          <div>
            <Label htmlFor="imagemUrl">URL da imagem</Label>
            <Input
              id="imagemUrl"
              className="mt-1.5"
              placeholder="https://"
              {...register('imagemUrl')}
            />
            {errors.imagemUrl?.message && (
              <ErrorFormMessage message={errors.imagemUrl.message} />
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
