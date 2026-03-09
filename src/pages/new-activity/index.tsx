import {
  questionFormSchema,
  type NewActivityFormType,
  type QuestionFormType,
} from "@/data/schemas/activities";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { QuestionCard } from "./components/Form/QuestionCard";
import { FormFooter } from "./components/Form/FormFooter";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const NewActivity = () => {
  const methods = useForm<QuestionFormType>({
    resolver: zodResolver(questionFormSchema),
  });
  const [localStorageActivityData, setLocalStorageActivityData] =
    useState<NewActivityFormType | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("newActivityData");
    const newActivityData = data ? JSON.parse(data) : null;
    setLocalStorageActivityData(newActivityData);
  }, []);

  const handleCreateActivity = (data: QuestionFormType) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col h-dvh">
      <Header
        activityName={
          localStorageActivityData?.activityName ?? "Atividade não encontrada"
        }
      />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleCreateActivity)}
          className="p-4 space-y-4 overflow-y-auto min-h-0 custom-bar sm:large-bar container mx-auto"
        >
          {localStorageActivityData ? (
            <>
              {Array.from({
                length: localStorageActivityData.qtdQuestions,
              }).map((_, index) => (
                <QuestionCard key={index} questionNumber={index + 1} />
              ))}
              <FormFooter />
            </>
          ) : (
            <p className="mt-5 text-center font-semibold text-zinc-500 sm:text-xl">
              Atividade não encontrada
            </p>
          )}
        </form>
      </FormProvider>
    </div>
  );
};
