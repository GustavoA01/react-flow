import {
  courseCodeSchema,
  type CourseCodeFormType,
} from '@/data/schemas/cursos';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useCodeDialog = (
  onOpenChange: (open: boolean) => void,
  onSubmit: (code: string) => string | void
) => {
  const methods = useForm<CourseCodeFormType>({
    resolver: zodResolver(courseCodeSchema),
    defaultValues: { code: '' },
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) methods.reset();
    onOpenChange(nextOpen);
  };

  const submitCode = ({ code }: CourseCodeFormType) => {
    const submitError = onSubmit(code);
    if (submitError) {
      methods.setError('code', { message: submitError });
      return;
    }
    handleOpenChange(false);
  };

  return {
    register: methods.register,
    handleSubmit: methods.handleSubmit,
    errors: methods.formState.errors,
    submitCode,
    handleOpenChange,
  };
};
