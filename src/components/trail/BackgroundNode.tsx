import type { BackgroundNodeProps } from "@/data/types/reactFlow"
import { Handle, Position } from "@xyflow/react"
import { memo } from "react"

const BackgroundNode = ({
  id,
  data: { width, height, image, alt },
}: BackgroundNodeProps) => {
  return (
    <div
      className="relative"
      style={{ width: width, height: height, pointerEvents: "none" }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />

      <Handle
        id={`${id}-top`}
        type="source"
        position={Position.Top}
        className="hidden"
      />
      <Handle
        id={`${id}-bottom`}
        type="target"
        position={Position.Bottom}
        className="hidden"
      />
    </div>
  )
}

export default memo(BackgroundNode)
