import type { QuestionFormType } from '@/data/schemas/activities';
import {
  generatedQuestionsSchema,
  type GeneratedQuestionType,
} from './schemas';

const extractJson = (text: string): unknown => {
  const trimmed = text.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fenced?.[1] ?? trimmed;
  return JSON.parse(raw);
};

const toFormQuestion = (
  question: GeneratedQuestionType
): QuestionFormType['questions'][number] => {
  const firstCorrect = question.alternatives.findIndex((alt) => alt.isCorrect);
  const correctIndex = firstCorrect === -1 ? 0 : firstCorrect;
  const alternatives = question.alternatives.map((alt, index) => ({
    text: alt.text,
    isCorrect: index === correctIndex,
  }));

  if (alternatives.length === 2) {
    alternatives.push(
      { text: 'ignore', isCorrect: false },
      { text: 'ignore', isCorrect: false }
    );
  }

  return {
    statement: question.statement,
    xp: question.xp,
    alternatives,
  };
};

export const parseGeneratedQuestions = (
  text: string
): QuestionFormType['questions'] | null => {
  try {
    const json = extractJson(text);
    const candidate = Array.isArray(json) ? { questions: json } : json;
    const parsed = generatedQuestionsSchema.safeParse(candidate);

    if (!parsed.success) return null;

    return parsed.data.questions.map(toFormQuestion);
  } catch {
    return null;
  }
};
