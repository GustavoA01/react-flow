import type { QuestionFormType } from '@/data/schemas/activity';

export const formatQuestionMessage = (
  question: QuestionFormType['questions'][number],
  index: number
) => {
  const alternatives = question.alternatives
    .filter((alt) => alt.text !== 'ignore' && alt.text.trim() !== '')
    .map((alt, altIndex) => {
      const letter = String.fromCharCode(65 + altIndex);
      const correctMark = alt.isCorrect ? ' **(correta)**' : '';
      return `- ${letter}) ${alt.text}${correctMark}`;
    })
    .join('\n');

  return `**Pergunta ${index + 1}** (${question.xp} XP)\n\n${question.statement}\n\n${alternatives}`;
};

export const formatQuestionsMessage = (
  questions: QuestionFormType['questions']
) =>
  questions
    .map((question, index) => formatQuestionMessage(question, index))
    .join('\n\n');
