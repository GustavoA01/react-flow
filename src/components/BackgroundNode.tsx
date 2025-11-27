import { Handle, Position } from "@xyflow/react"
import { memo } from "react"

type BackgroundNodeProps = {
  data: { id: string; image: string; width: number; height: number }
}

const BackgroundNode = ({ data }: BackgroundNodeProps) => {
  return (
    <div
      className="relative"
      style={{ width: data.width, height: data.height, pointerEvents: "none" }}
    >
      <img
        src={data.image}
        alt={`Background ${data.id}`}
        className="w-full h-full object-cover rounded-3xl opacity-80"
      />

      <Handle
        id={`${data.id}-top`}
        type="source"
        position={Position.Top}
        className="hidden"
      />
      <Handle
        id={`${data.id}-bottom`}
        type="target"
        position={Position.Bottom}
        className="hidden"
      />
    </div>
  )
}

export default memo(BackgroundNode)
