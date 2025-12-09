import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown } from "lucide-react";
import { AnimateContent } from "./AnimateContent";

export const UserToolTip = ({
  setOpenDialog,
}: {
  setOpenDialog: () => void;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger className="hidden sm:flex py-2 gap-2 font-montserrat items-center">
        <p>Olá, Gustavo</p>
        <ChevronDown size={16} />
      </TooltipTrigger>

      <TooltipContent
        removeArrow
        side="bottom"
        className="p-0 border-none bg-transparent select-none mr-8"
      >
        <AnimateContent setOpenDialog={setOpenDialog} />
      </TooltipContent>
    </Tooltip>
  );
};
