import { z } from 'zod';

export const addMedalSchema = z.object({
  nome: z.string().trim().min(1, 'Informe o nome da medalha'),
  pontosMin: z
    .number({ error: 'Informe os pontos mínimos' })
    .int('Use um número inteiro')
    .min(0, 'Os pontos mínimos não podem ser negativos'),
  imagemUrl: z.url('Informe uma URL válida'),
});

export type AddMedalFormType = z.infer<typeof addMedalSchema>;
