import { Header } from "../../features/QuestionsForm/components/Header";
import { QuestionCard } from "../../features/QuestionsForm/container/QuestionCard";
import { FormFooter } from "../../features/QuestionsForm/components/FormFooter";
import { FormProvider } from "react-hook-form";
import { useNewActivity } from "@/features/QuestionsForm/hooks/useNewActivity";

export const NewActivity = () => {
  const { fields, localStorageActivityData, handleCreateActivity, methods } =
    useNewActivity();

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
              {fields.map((field, index) => (
                <QuestionCard key={field.id} questionNumber={index + 1} />
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
