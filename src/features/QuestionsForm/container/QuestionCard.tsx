import { Card } from "@/components/ui/card";
import { FormCardHeader } from "../components/FormCardHeader";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { XpInput } from "../components/XpInput";
import { Badge } from "@/components/ui/badge";
import { InputOptions } from "../components/InputOptions";
import { motion } from "framer-motion";
import { RadioGroup } from "@/components/ui/radio-group";
import { ErrorFormMessage } from "@/components/ErrorFormMessage";
import { useQuestionCard } from "../hooks/useQuestionCard";

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
    getValues,
    errors,
    register,
    setValue,
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

      <div className="space-y-2">
        <div className="flex space-x-2">
          <Label>ALTERNATIVAS </Label>
          <Badge className="text-xs bg-green-200 text-green-700 py-1 px-2 rounded-md font-semibold flex items-center gap-1">
            Selecione a correta
          </Badge>
        </div>

        <div className="space-y-2 sm:grid grid-cols-2 sm:gap-4 sm:space-y-0">
          {Array.from({ length: !isTwoAlternatives ? 4 : 2 }).map(
            (_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
              >
                <RadioGroup
                  value={correctALternative}
                  onValueChange={(val) => {
                    setCorrectAlternative(val);

                    const questionIdx = questionNumber - 1;
                    const alternatives = getValues(
                      `questions.${questionIdx}.alternatives`,
                    );

                    alternatives.forEach((_, altIdx) => {
                      const isCurrent = altIdx === index;
                      setValue(
                        `questions.${questionIdx}.alternatives.${altIdx}.isCorrect`,
                        isCurrent,
                      );
                    });
                  }}
                >
                  <InputOptions
                    alternativeNumber={index}
                    questionNumber={questionNumber}
                  />
                </RadioGroup>

                {errors.questions?.[questionNumber - 1]?.alternatives?.[index]
                  ?.text?.message && (
                  <ErrorFormMessage
                    message={
                      errors.questions?.[questionNumber - 1]?.alternatives?.[
                        index
                      ]?.text?.message ?? ""
                    }
                  />
                )}
              </motion.div>
            ),
          )}
        </div>

        {errors.questions?.[questionNumber - 1]?.alternatives?.message && (
          <ErrorFormMessage
            message={
              errors.questions?.[questionNumber - 1]?.alternatives?.message ??
              ""
            }
          />
        )}
      </div>
    </Card>
  );
};
