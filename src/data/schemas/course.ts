import { z } from 'zod';

export const courseCodeSchema = z.object({
  code: z.string().trim().min(1, 'Informe o código da turma'),
});

export const newCourseSchema = z.object({
  nome: z.string().trim().min(1, 'Informe o nome do curso'),
  monitorId: z.string().min(1, 'Selecione um monitor'),
});

export type CourseCodeFormType = z.infer<typeof courseCodeSchema>;
export type NewCourseFormType = z.infer<typeof newCourseSchema>;
