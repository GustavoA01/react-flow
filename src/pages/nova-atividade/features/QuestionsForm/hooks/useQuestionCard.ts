import type { QuestionFormType } from '@/data/schemas/activities';
import { useFormContext } from 'react-hook-form';

const radioValueFor = (questionNumber: number, alternativeIndex: number) =>
  `id-question-${questionNumber - 1}-alternative-${alternativeIndex}`;

export const useQuestionCard = (questionNumber: number) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<QuestionFormType>();

  const alternatives = watch(`questions.${questionNumber - 1}.alternatives`);
  const isTwoAlternatives = alternatives?.[2]?.text === 'ignore';
  const correctIndex =
    alternatives?.findIndex((alternative) => alternative.isCorrect) ?? -1;
  const correctALternative =
    correctIndex >= 0 ? radioValueFor(questionNumber, correctIndex) : '';

  const toggleAlternatives = (isTwo: boolean, questionNumber: number) => {
    if (isTwo) {
      setValue(`questions.${questionNumber - 1}.alternatives.2.text`, 'ignore');
      setValue(`questions.${questionNumber - 1}.alternatives.3.text`, 'ignore');
      setValue(
        `questions.${questionNumber - 1}.alternatives.2.isCorrect`,
        false
      );
      setValue(
        `questions.${questionNumber - 1}.alternatives.3.isCorrect`,
        false
      );
    } else {
      setValue(`questions.${questionNumber - 1}.alternatives.2.text`, '');
      setValue(`questions.${questionNumber - 1}.alternatives.3.text`, '');
    }
  };

  return {
    toggleAlternatives,
    isTwoAlternatives,
    correctALternative,
    errors,
    register,
  };
};
