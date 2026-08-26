import { z } from 'zod';

export const courseCodeSchema = z.object({
  code: z.string().trim().min(1, 'Informe o código da turma'),
});

export type CourseCodeFormType = z.infer<typeof courseCodeSchema>;
