import type { NewActivityFormType } from "@/data/schemas/activities";
import { useMediaDevice } from "@/hooks/useMediaDevice";
import { useEffect, useState } from "react";
import { Header } from "./-components/Header";
import { QuestionCard } from "./-components/Form/QuestionCard";
import { FormFooter } from "./-components/Form/FormFooter";
import { createFileRoute } from "@tanstack/react-router";

const NewActivityPage = () => {
  const { padding2XlScreens } = useMediaDevice();

  const [localStorageActivityData, setLocalStorageActivityData] =
    useState<NewActivityFormType | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("newActivityData");
    const newActivityData = data ? JSON.parse(data) : null;
    setLocalStorageActivityData(newActivityData);
  }, []);

  return (
    <div className="flex flex-col h-dvh">
      <Header
        activityName={
          localStorageActivityData?.activityName ?? "Atividade não encontrada"
        }
      />

      <form
        className={`p-4 space-y-4 overflow-y-auto min-h-0 custom-bar sm:large-bar ${padding2XlScreens}`}
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
    </div>
  );
};

export const Route = createFileRoute("/nova-atividade/")({
  loader: () => "Hello World",
  component: NewActivityPage,
});
