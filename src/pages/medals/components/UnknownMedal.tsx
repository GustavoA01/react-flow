import { Card, CardContent } from "@/components/ui/card";
import { CircleQuestionMark } from "lucide-react";

export const UnkknownMedal = () => (
  <Card className="group opacity-70 border-dashed border-2 border-zinc-200 select-none cursor-pointer">
    <CardContent className="flex flex-col flex-1 items-center justify-center gap-2">
      <CircleQuestionMark className=" w-20 h-20 sm:w-15 sm:h-15 text-zinc-400 group-hover:text-red-500 transition-colors duration-300" />
      <p className="text-muted-foreground text-center text-sm">20 xp</p>
    </CardContent>
  </Card>
);
