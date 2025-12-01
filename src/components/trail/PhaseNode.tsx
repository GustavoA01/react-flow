import { Star, Check } from "lucide-react"
import { Handle, Position } from "@xyflow/react"
import { points } from "../../pages/map"
import { useState } from "react"
import { Dialog } from "../ui/dialog"
import { PhaseProgressModal } from "../../features/ProgressModal/container/PhaseProgressModal"
import type { PhaseNodeProps } from "@/data/types/reactFlow"

export const PhaseNode = ({ id, data: { minPoints } }: PhaseNodeProps) => {
  const [openDialog, setCloseDialog] = useState(false)

  const isLocked = points < minPoints

  const baseBgClass = isLocked ? "bg-primary" : "bg-green-500"
  const shineClass = "bg-gradient-to-b from-white/40 to-transparent opacity-70"
  const overlayGradientClass = isLocked
    ? "bg-primaryring-1 ring-inset ring-black/10"
    : "bg-gradient-to-b from-green-500/80 to-green-500 ring-1 ring-inset ring-black/10"

  const Icon = isLocked ? Star : Check
  const iconClassName = isLocked ? "text-white" : "text-green-900"

  return (
    <>
      <div
        onClick={() => setCloseDialog(true)}
        className="relative w-20 h-20 rounded-full select-none drop-shadow-lg transition-transform hover:scale-105 cursor-pointer"
      >
        {/* camada de base */}
        <div className={`absolute inset-0 rounded-full ${baseBgClass}`} />

        {/* gradiente/anel superior para profundidade */}
        <div
          className={`absolute inset-0 bottom-[3px] rounded-full ${overlayGradientClass}`}
        />

        {/* brilho superior */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-full ${shineClass}`}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={32} className={`${iconClassName} drop-shadow-sm`} />
        </div>

        <Handle
          type="source"
          position={Position.Top}
          id={`${id}-top`}
          className="opacity-0 w-2 h-2"
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id={`${id}-bottom`}
          className="opacity-0 w-2 h-2"
        />
      </div>

      <Dialog open={openDialog} onOpenChange={setCloseDialog}>
        <PhaseProgressModal points={points} minPoints={minPoints} id={id} />
      </Dialog>
    </>
  )
}
