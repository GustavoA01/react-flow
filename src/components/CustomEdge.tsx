import { BaseEdge, getBezierPath } from "@xyflow/react";

export function CustomEdge(props) {
  const [edgePath] = getBezierPath(props);

  return (
    <BaseEdge 
      path={edgePath} 
      {...props}
      style={{
        stroke: '#8B4513', 
        strokeWidth: 4,      
        strokeDasharray: '10 5' // Traço (10px de linha, 5px de espaço)
      }} 
    />
  );
}