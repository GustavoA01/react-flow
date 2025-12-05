import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ChevronDown } from "lucide-react"
import { AnimateContent } from "./AnimateContent"

export const CustomHtoolTip = () => {
  return (
    <Tooltip>
      <TooltipTrigger className="hidden sm:flex py-2 gap-2 font-montserrat items-center">
        <p>Olá, Gustavo</p>
        <ChevronDown size={16} />
      </TooltipTrigger>

      <TooltipContent side="bottom" className="p-0 border-none bg-transparent select-none">
        <AnimateContent />
      </TooltipContent>
    </Tooltip>
  )
}
