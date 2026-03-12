import { ErrorFormMessage } from "@/components/ErrorFormMessage";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import type { QuestionFormType } from "@/data/schemas/activities";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { InputOptions } from "./InputOptions";

type AlternativesProps = {
  isTwoAlternatives: boolean;
  correctALternative: string;
  setCorrectAlternative: (val: string) => void;
  questionNumber: number;
};

export const Alternatives = ({
  isTwoAlternatives,
  correctALternative,
  setCorrectAlternative,
  questionNumber,
}: AlternativesProps) => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<QuestionFormType>();

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Label>ALTERNATIVAS </Label>
        <Badge className="text-xs bg-green-200 text-green-700 py-1 px-2 rounded-md font-semibold flex items-center gap-1">
          Selecione a correta
        </Badge>
      </div>

      <div className="space-y-2 sm:grid grid-cols-2 sm:gap-4 sm:space-y-0">
        {Array.from({ length: !isTwoAlternatives ? 4 : 2 }).map((_, index) => (
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

            {errors.questions?.[questionNumber - 1]?.alternatives?.[index]?.text
              ?.message && (
              <ErrorFormMessage
                message={
                  errors.questions?.[questionNumber - 1]?.alternatives?.[index]
                    ?.text?.message ?? ""
                }
              />
            )}
          </motion.div>
        ))}
      </div>

      {errors.questions?.[questionNumber - 1]?.alternatives?.message && (
        <ErrorFormMessage
          message={
            errors.questions?.[questionNumber - 1]?.alternatives?.message ?? ""
          }
        />
      )}
    </div>
  );
};
