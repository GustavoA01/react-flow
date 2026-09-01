import { toast } from '@/components/ui/toast';
import { addMedalSchema, type AddMedalFormType } from '@/data/schemas/medal';
import { uploadImage } from '@/services/cloudinary';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useAddMedalDialog = (onOpenChange: (open: boolean) => void) => {
  const methods = useForm<AddMedalFormType>({
    resolver: zodResolver(addMedalSchema),
    defaultValues: {
      nome: '',
      pontosMin: 0,
    },
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) methods.reset();
    onOpenChange(nextOpen);
  };

  const onSubmit = methods.handleSubmit(async (data: AddMedalFormType) => {
    try {
      const imagem = data.imagem.item(0);
      if (!imagem) {
        toast.add({
          type: 'error',
          title: 'Erro ao enviar a imagem',
        });
        return;
      }

      const imagemUrl = await uploadImage(imagem);
      console.log({
        nome: data.nome,
        pontosMin: data.pontosMin,
        imagemUrl,
      });
      handleOpenChange(false);
      toast.add({
        type: 'success',
        title: 'Medalha adicionada',
      });
    } catch (error) {
      console.error(error);
      methods.setError('imagem', {
        message: 'Não foi possível enviar a imagem. Tente de novo.',
      });
      toast.add({
        type: 'error',
        title: 'Não foi possível enviar a imagem.',
      });
    }
  });

  return {
    onSubmit,
    register: methods.register,
    errors: methods.formState.errors,
    isSubmitting: methods.formState.isSubmitting,
    handleOpenChange,
  };
};
