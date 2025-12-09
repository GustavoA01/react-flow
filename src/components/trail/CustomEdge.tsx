import { BaseEdge, getBezierPath } from "@xyflow/react";

export function CustomEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  sourceHandleId,
  targetHandleId,
  selectable,
  deletable,
  pathOptions,
  ...rest
}: any) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      {...rest}
      style={{
        stroke: "#8B4513",
        strokeWidth: 4,
        strokeDasharray: "10 5",
      }}
    />
  );
}
