import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type FormHeaderProps = {
  isTwoAlternatives: boolean;
  setTwoALternatives: (value: boolean) => void;
};

export const FormHeader = ({
  isTwoAlternatives,
  setTwoALternatives,
}: FormHeaderProps) => {
  return (
    <div className="flex bg-blue-100 rounded-t-md -mx-4 mb-4 p-4 justify-between items-center">
      <Badge className="bg-blue-onSurface text-blue-500 py-2 px-3 font-semibold sm:text-sm">
        QUESTÃO 1
      </Badge>

      <div className="flex items-center space-x-2">
        <Label className="text-xs">4 OPÇÕES</Label>
        <Switch onClick={() => setTwoALternatives(!isTwoAlternatives)} />
        <Label className="text-xs">2 OPÇÕES</Label>
      </div>
    </div>
  );
};
