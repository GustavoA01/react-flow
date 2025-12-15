import { RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

type InputOptionsProps = {
  alternativeNumber: number;
  questionNumber: number;
};

export const InputOptions = ({
  alternativeNumber,
  questionNumber,
}: InputOptionsProps) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        id="correctAnswer"
        value={`id-question-${questionNumber}-alternative-${alternativeNumber}`}
      />

      <Textarea
        id={`question-${questionNumber}-alternative-${alternativeNumber}`}
        placeholder={`Alternativa ${alternativeNumber}`}
        className="resize-none placeholder:text-zinc-400 placeholder:max-sm:text-xs focus:ring-0 min-h-10 focus:outline-none shadow-none transition-all max-sm:text-sm bg-zinc-50"
      />
    </div>
  );
};
