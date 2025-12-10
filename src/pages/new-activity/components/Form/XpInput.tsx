import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

export const XpInput = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 my-2">
        <Label>XP</Label>
        <div className="border w-30 flex items-center gap-2 px-2 py-1 rounded-md max-w-fit bg-zinc-50">
          <Input
            placeholder="1 - 3"
            className="max-w-24 border-none shadow-none placeholder:text-zinc-400 max-sm:text-xs"
            type="number"
          />
          <Zap className="fill-green-400 text-green-400" />
        </div>
      </div>
    </div>
  );
};
