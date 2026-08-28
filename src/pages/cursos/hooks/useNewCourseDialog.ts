import { newCourseSchema, type NewCourseFormType } from '@/data/schemas/course';
import { temporaryMonitores } from '@/data/temporaryMocks/monitores';
import type { CursoType } from '@/data/types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const emptyValues: NewCourseFormType = {
  nome: '',
  monitorId: '',
};

const valuesFromCurso = (curso?: CursoType): NewCourseFormType => {
  if (!curso) return emptyValues;
  return { nome: curso.nome, monitorId: curso.monitorId };
};

export const useNewCourseDialog = (
  onOpenChange: (open: boolean) => void,
  curso?: CursoType
) => {
  const methods = useForm<NewCourseFormType>({
    resolver: zodResolver(newCourseSchema),
    defaultValues: valuesFromCurso(curso),
  });

  const monitorId = methods.watch('monitorId');

  useEffect(() => {
    methods.reset(valuesFromCurso(curso));
  }, [curso, methods]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) methods.reset(valuesFromCurso(curso));
    onOpenChange(nextOpen);
  };

  const onSubmit = methods.handleSubmit((data: NewCourseFormType) => {
    console.log(data);
    handleOpenChange(false);
  });

  return {
    onSubmit,
    register: methods.register,
    control: methods.control,
    errors: methods.formState.errors,
    handleOpenChange,
    monitores: temporaryMonitores,
    canSubmit: Boolean(monitorId) && temporaryMonitores.length > 0,
    isEditing: Boolean(curso),
  };
};
