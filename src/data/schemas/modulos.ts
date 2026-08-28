import { z } from 'zod';

export const newModuleSchema = z.object({
  nome: z.string().trim().min(1, 'Informe o nome do módulo'),
});

export type NewModuleFormType = z.infer<typeof newModuleSchema>;
