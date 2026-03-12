import { Card } from "@/components/ui/card";
import { FormCardHeader } from "../components/FormCardHeader";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { XpInput } from "../components/XpInput";
import { ErrorFormMessage } from "@/components/ErrorFormMessage";
import { useQuestionCard } from "../hooks/useQuestionCard";
import { Alternatives } from "../components/Alternatives";

export const QuestionCard = ({
  questionNumber,
}: {
  questionNumber: number;
}) => {
  const {
    toggleAlternatives,
    isTwoAlternatives,
    setCorrectAlternative,
    correctALternative,
    errors,
    register,
  } = useQuestionCard();

  return (
    <Card className="px-4 text-zinc-500 font-semibold pt-0">
      <FormCardHeader
        questionNumber={questionNumber}
        isTwoAlternatives={isTwoAlternatives}
        toogleAlternatives={toggleAlternatives}
      />

      <div className="space-y-2 ">
        <Label>ENUNCIADO</Label>
        <Textarea
          {...register(`questions.${questionNumber - 1}.statement`)}
          placeholder="Escreva a pergunta..."
          className="placeholder:text-zinc-400 max-sm:text-xs focus:ring-2 focus:outline-none focus:ring-blue-100 focus:border-blue-400 bg-zinc-50 resize-none max-h-fit shadow-none"
        />
      </div>

      {errors.questions?.[questionNumber - 1]?.statement?.message && (
        <ErrorFormMessage
          message={
            errors.questions[questionNumber - 1]?.statement?.message ?? ""
          }
        />
      )}

      <XpInput questionNumber={questionNumber} />
      {errors.questions?.[questionNumber - 1]?.xp?.message && (
        <ErrorFormMessage
          message={errors.questions[questionNumber - 1]?.xp?.message ?? ""}
        />
      )}

      <Alternatives
        isTwoAlternatives={isTwoAlternatives}
        correctALternative={correctALternative}
        setCorrectAlternative={setCorrectAlternative}
        questionNumber={questionNumber}
      />
    </Card>
  );
};
