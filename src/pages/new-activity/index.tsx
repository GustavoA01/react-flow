import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { NewActivityFormType } from "@/data/schemas/activities";
import { useMediaDevice } from "@/hooks/useMediaDevice";
import { useEffect, useState } from "react";
import { FormHeader } from "./components/Form/FormHeader";
import { InputOptions } from "./components/Form/InputOptions";
import { Badge } from "@/components/ui/badge";
import { XpInput } from "./components/Form/XpInput";
import { Header } from "./components/Header";

export const NewActivity = () => {
  const { padding2XlScreens } = useMediaDevice();
  const [localStorageActivityData, setLocalStorageActivityData] =
    useState<NewActivityFormType | null>(null);
  const [isTwoAlternatives, setIsTwoAlternatives] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("newActivityData");
    const newActivityData = data ? JSON.parse(data) : null;
    setLocalStorageActivityData(newActivityData);
  }, []);

  return (
    <div>
      <Header activityName={localStorageActivityData?.activityName ?? ""} />

      <form className={`p-4 ${padding2XlScreens} space-y-4`}>
        <Card className="px-4 text-zinc-500 font-semibold pt-0">
          <FormHeader
            isTwoAlternatives={isTwoAlternatives}
            setTwoALternatives={setIsTwoAlternatives}
          />

          <div className="space-y-2 ">
            <Label>ENUNCIADO</Label>
            <Textarea
              placeholder="Escreva a pergunta..."
              className="placeholder:text-zinc-700 max-sm:text-xs focus:ring-2 focus:outline-none focus:ring-blue-100 focus:border-blue-400 bg-zinc-50 resize-none max-h-fit shadow-none"
            />
          </div>

          <XpInput />

          <div className="space-y-2">
            <div className="flex space-x-2">
              <Label>ALTERNATIVAS </Label>
              <Badge className="text-xs bg-green-200 text-green-700 py-1 px-2 rounded-md font-semibold flex items-center gap-1">
                Defina a correta
              </Badge>
            </div>

            <div className="space-y-2 sm:grid grid-cols-2 sm:gap-4 sm:space-y-0">
              {Array.from({ length: !isTwoAlternatives ? 4 : 2 }).map(
                (_, index) => (
                  <InputOptions key={index} />
                ),
              )}
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};
