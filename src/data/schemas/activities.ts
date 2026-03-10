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

export const questionFormSchema = z.object({
  questions: z.array(
    z.object({
      statement: z
        .string()
        .trim()
        .min(1, "O enunciado da pergunta é obrigatório"),
      xp: z
        .number()
        .min(1, "Defina a quantidade de XP")
        .max(3, "XP máximo é 3"),
      alternatives: z
        .array(
          z.object({
            text: z
              .string()
              .trim()
              .min(1, "O texto da alternativa é obrigatório"),
            isCorrect: z.boolean(),
          }),
        )
        .min(2, "A pergunta deve ter pelo menos 2 alternativas")
        .max(4, "A pergunta deve ter no máximo 4 alternativas")
        .refine((alts) => alts.some((alt) => alt.isCorrect === true), {
          message: "Você precisa marcar uma alternativa como correta",
          path: [""],
        }),
    }),
  ),
});

export type NewActivityFormType = z.infer<typeof newActivitySchema>;
export type QuestionFormType = z.infer<typeof questionFormSchema>;
