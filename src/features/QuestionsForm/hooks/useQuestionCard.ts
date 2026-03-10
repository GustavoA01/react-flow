import type { QuestionFormType } from "@/data/schemas/activities";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const useQuestionCard = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<QuestionFormType>();
  const [isTwoAlternatives, setIsTwoAlternatives] = useState(false);
  const [correctALternative, setCorrectAlternative] = useState<string>("");

  const toggleAlternatives = (isTwo: boolean, questionNumber: number) => {
    setIsTwoAlternatives(isTwo);

    if (isTwo) {
      setValue(`questions.${questionNumber - 1}.alternatives.2.text`, "ignore");
      setValue(`questions.${questionNumber - 1}.alternatives.3.text`, "ignore");
      setValue(
        `questions.${questionNumber - 1}.alternatives.2.isCorrect`,
        false,
      );
      setValue(
        `questions.${questionNumber - 1}.alternatives.3.isCorrect`,
        false,
      );
      setCorrectAlternative("");
    } else {
      setValue(`questions.${questionNumber - 1}.alternatives.2.text`, "");
      setValue(`questions.${questionNumber - 1}.alternatives.3.text`, "");
    }
  };

  return {
    toggleAlternatives,
    isTwoAlternatives,
    correctALternative,
    getValues,
    errors,
    register,
    setValue,
    setCorrectAlternative,
  };
};
