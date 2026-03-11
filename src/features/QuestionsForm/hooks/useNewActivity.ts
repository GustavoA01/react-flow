import {
  questionFormSchema,
  type NewActivityFormType,
  type QuestionFormType,
} from "@/data/schemas/activities";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const useNewActivity = () => {
  const [localStorageActivityData, setLocalStorageActivityData] =
    useState<NewActivityFormType | null>(null);

  const methods = useForm<QuestionFormType>({
    resolver: zodResolver(questionFormSchema),
  });
  const { reset } = methods;

  const { fields } = useFieldArray({
    control: methods.control,
    name: "questions",
  });

  useEffect(() => {
    const data = localStorage.getItem("newActivityData");
    const newActivityData = data ? JSON.parse(data) : null;
    setLocalStorageActivityData(newActivityData);

    reset({
      questions: Array.from({ length: newActivityData.qtdQuestions ?? 0 }).map(
        () => ({
          statement: "",
          alternatives: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
        }),
      ),
    });
  }, [reset]);

  const handleCreateActivity = (data: QuestionFormType) => {
    const questionsFormatted = data.questions.map((question) => {
      const filteredAlternatives = question.alternatives.filter(
        (alt) => alt.text !== "ignore",
      );
      return {
        ...question,
        alternatives: filteredAlternatives,
      };
    });

    const totalXp = questionsFormatted.reduce(
      (acc, question) => question.xp + acc,
      0,
    );

    const activityData = {
      ...localStorageActivityData,
      totalXp,
      questions: questionsFormatted,
    };

    console.log(activityData);
  };

  return {
    localStorageActivityData,
    methods,
    fields,
    handleCreateActivity,
  };
};
