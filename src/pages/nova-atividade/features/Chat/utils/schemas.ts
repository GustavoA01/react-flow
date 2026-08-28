import z from 'zod';

const generatedAlternativeSchema = z.object({
  text: z.string().trim().min(1),
  isCorrect: z.boolean(),
});

const generatedQuestionSchema = z.object({
  statement: z.string().trim().min(1),
  xp: z.coerce.number().min(1).max(3).catch(1),
  alternatives: z.union([
    z.array(generatedAlternativeSchema).length(2),
    z.array(generatedAlternativeSchema).length(4),
  ]),
});

export const generatedQuestionsSchema = z.object({
  questions: z.array(generatedQuestionSchema).min(1).max(10),
});

export type GeneratedQuestionType = z.infer<typeof generatedQuestionSchema>;
