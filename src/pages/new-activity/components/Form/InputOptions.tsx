import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { Circle } from "lucide-react";

export const InputOptions = () => {
  return (
    <div className="flex items-center space-x-1">
      <Toggle
        id="correctAnswer"
        aria-label="Toggle cicle"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-onSurface data-[state=on]:*:[svg]:stroke-blue-500"
        size="sm"
      >
        <Circle className="text-green-700" />
      </Toggle>

      <Textarea
        id="alternativeA"
        className="resize-none focus:ring-0 min-h-10 focus:outline-none shadow-none"
      />
    </div>
  );
};
