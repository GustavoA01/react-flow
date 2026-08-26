import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { useCodeDialog } from '../hooks/useCodeDialog';

type CodeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (code: string) => string | void;
};

export const CodeDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: CodeDialogProps) => {
  const { register, handleSubmit, errors, submitCode, handleOpenChange } =
    useCodeDialog(onOpenChange, onSubmit);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Entrar na turma</DialogTitle>
          <DialogDescription>
            Digite o código que o monitor passou para acessar o curso
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit(submitCode)}>
          <div>
            <Input
              autoFocus
              {...register('code')}
              placeholder="Código de acesso"
              className="placeholder:max-sm:text-sm"
            />
            {errors.code?.message && (
              <ErrorFormMessage message={errors.code.message} />
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Entrar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
