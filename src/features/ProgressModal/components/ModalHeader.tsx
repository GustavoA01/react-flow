import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Medal, TrainFront } from "lucide-react"

type ModalHeaderProps = {
  level: string
  concluded: boolean
}

export const ModalHeader = ({ level, concluded }: ModalHeaderProps) => {
  return (
    <DialogHeader className="flex items-center">
      <DialogTitle className="font-bold text-white">Nível {level}</DialogTitle>
      <div
        className={`${
          concluded
            ? "bg-linear-to-l from-green-400 to-emerald-500"
            : "bg-linear-to-r from-blue-400 to-indigo-400"
        } p-4 rounded-full `}
      >
        {concluded ? (
          <Medal size={32} className="text-white" />
        ) : (
          <TrainFront size={32} className="text-white" />
        )}
      </div>

      <DialogDescription
        className={`text-white text-xs font-bold ${
          concluded ? "bg-green-500" : "bg-blue-800"
        } py-1 px-4 rounded-full`}
      >
        {concluded ? "Concluído" : "Em progresso"}
      </DialogDescription>
    </DialogHeader>
  )
}
