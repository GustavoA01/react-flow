import { addMedalSchema, type AddMedalFormType } from '@/data/schemas/medal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useAddMedalDialog = (onOpenChange: (open: boolean) => void) => {
  const methods = useForm<AddMedalFormType>({
    resolver: zodResolver(addMedalSchema),
    defaultValues: {
      nome: '',
      pontosMin: 0,
      imagemUrl: '',
    },
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) methods.reset();
    onOpenChange(nextOpen);
  };

  const onSubmit = methods.handleSubmit((data: AddMedalFormType) => {
    console.log(data);
    handleOpenChange(false);
  });

  return {
    onSubmit,
    register: methods.register,
    errors: methods.formState.errors,
    handleOpenChange,
  };
};
