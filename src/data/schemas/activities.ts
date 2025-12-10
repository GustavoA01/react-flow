import { z } from "zod";

export const newActivitySchema = z.object({
  activityName: z
    .string()
    .trim()
    .min(1, "O nome da atividade é obrigatório")
    .min(5, "A atividade deve ter pelo menos 5 letras"),
  qtdQuestions: z
    .number()
    .min(1, "Defina o número de perguntas")
    .min(3, "O número mínimo de perguntas é 3")
    .max(10, "O número máximo de perguntas é 10"),
});

export type NewActivityFormType = z.infer<typeof newActivitySchema>;
