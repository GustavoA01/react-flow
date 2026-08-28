import {
  newModuleSchema,
  type NewModuleFormType,
} from '@/data/schemas/module';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useNewModuleDialog = (onOpenChange: (open: boolean) => void) => {
  const methods = useForm<NewModuleFormType>({
    resolver: zodResolver(newModuleSchema),
    defaultValues: {
      nome: '',
    },
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) methods.reset();
    onOpenChange(nextOpen);
  };

  const onSubmit = methods.handleSubmit((data: NewModuleFormType) => {
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
