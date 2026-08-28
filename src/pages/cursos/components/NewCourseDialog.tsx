import { Button } from '@/components/ui/button';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ErrorFormMessage } from '@/components/ErrorFormMessage';
import { LabelInput } from '@/components/LabelInput';
import type { CursoType } from '@/data/types/api';
import { Controller } from 'react-hook-form';
import { useNewCourseDialog } from '../hooks/useNewCourseDialog';

type NewCourseDialogPropsType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  curso?: CursoType;
};

export const NewCourseDialog = ({
  open,
  onOpenChange,
  curso,
}: NewCourseDialogPropsType) => {
  const {
    register,
    control,
    onSubmit,
    errors,
    handleOpenChange,
    monitores,
    canSubmit,
    isEditing,
  } = useNewCourseDialog(onOpenChange, curso);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Editar curso' : 'Novo curso'}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? `Altere o nome ou o monitor responsável. Cod. ${curso?.codigoAcesso}`
              : 'Informe o nome e o monitor responsável. O código de acesso é gerado automaticamente.'}
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={onSubmit}>
          <LabelInput
            id="nome"
            label="Nome"
            autoFocus
            placeholder="Ex.: Cálculo I"
            error={errors.nome?.message}
            register={register}
          />

          <div>
            <Label htmlFor="monitorId">Monitor</Label>
            <Controller
              name="monitorId"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value || undefined}
                  onValueChange={onChange}
                  disabled={monitores.length === 0}
                >
                  <SelectTrigger id="monitorId" className="mt-1.5 w-full">
                    <SelectValue placeholder="Selecione um monitor" />
                  </SelectTrigger>
                  <SelectContent>
                    {monitores.map((monitor) => (
                      <SelectItem key={monitor.id} value={monitor.id}>
                        {monitor.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.monitorId?.message && (
              <ErrorFormMessage message={errors.monitorId.message} />
            )}
            {!isEditing && (
              <p className="mt-1.5 text-xs text-zinc-500">
                * Adicione monitores antes de criar o curso.
              </p>
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={!canSubmit}>
              {isEditing ? 'Salvar' : 'Adicionar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
