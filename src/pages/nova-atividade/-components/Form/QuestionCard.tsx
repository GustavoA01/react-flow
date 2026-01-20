import { Card } from "@/components/ui/card";
import { FormCardHeader } from "./FormCardHeader";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { XpInput } from "./XpInput";
import { Badge } from "@/components/ui/badge";
import { InputOptions } from "./InputOptions";
import { motion } from "framer-motion";
import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";

export const QuestionCard = ({
  questionNumber,
}: {
  questionNumber: number;
}) => {
  const [isTwoAlternatives, setIsTwoAlternatives] = useState(false);
  const [correctALternative, setCorrectAlternative] = useState<string>("");

  return (
    <Card className="px-4 text-zinc-500 font-semibold pt-0">
      <FormCardHeader
        questionNumber={questionNumber}
        isTwoAlternatives={isTwoAlternatives}
        setTwoALternatives={setIsTwoAlternatives}
      />

      <div className="space-y-2 ">
        <Label>ENUNCIADO</Label>
        <Textarea
          placeholder="Escreva a pergunta..."
          className="placeholder:text-zinc-400 max-sm:text-xs focus:ring-2 focus:outline-none focus:ring-blue-100 focus:border-blue-400 bg-zinc-50 resize-none max-h-fit shadow-none"
        />
      </div>

      <XpInput />

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
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                initial={{ opacity: 0 }}
              >
                <RadioGroup
                  value={correctALternative}
                  onValueChange={setCorrectAlternative}
                >
                  <InputOptions
                    alternativeNumber={index + 1}
                    questionNumber={questionNumber}
                  />
                </RadioGroup>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </Card>
  );
};
