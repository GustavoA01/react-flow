import { Star, Lock } from "lucide-react"
import { Handle, Position } from "@xyflow/react"
import { points } from "../pages/map";

export function PhaseNode({
  data,
}: {
  data: { icon: string; id: string; minPoints: number }
}) {
  const { minPoints } = data

  const isLocked = points < minPoints

  const baseBgClass = isLocked ? "bg-gray-400" : "bg-primary"
  const overlayGradientClass = isLocked
    ? "bg-gray-300 ring-1 ring-inset ring-black/10"
    : "bg-gradient-to-b from-primary/80 to-primary ring-1 ring-inset ring-black/10"
  const shineClass = "bg-gradient-to-b from-white/40 to-transparent opacity-70"

  const Icon = isLocked ? Lock : Star
  const iconClassName = isLocked ? "text-gray-400" : "text-white"

  return (
    <div className="relative w-20 h-20 rounded-full select-none drop-shadow-lg transition-transform hover:scale-105 cursor-pointer">
      {/* camada de base */}
      <div className={`absolute inset-0 rounded-full ${baseBgClass}`} />

      {/* gradiente/anel superior para profundidade */}
      <div className={`absolute inset-0 bottom-[3px] rounded-full ${overlayGradientClass}`} />

      {/* brilho superior */}
      <div className={`pointer-events-none absolute inset-0 rounded-full ${shineClass}`} />

      {/* ícone central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={32} className={`${iconClassName} drop-shadow-sm`} />
      </div>

      {/* handles invisíveis */}
      <Handle type="source" position={Position.Top} id={`${data.id}-top`} className="opacity-0 w-2 h-2" />
      <Handle type="target" position={Position.Bottom} id={`${data.id}-bottom`} className="opacity-0 w-2 h-2" />
    </div>
  )
}
