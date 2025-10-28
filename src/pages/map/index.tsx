import { useState, useCallback } from "react"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  type CoordinateExtent,
  type FitViewOptions,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { PhaseNode } from "../../components/PhaseNode"
import { edgesPhases } from "../../constants/edges"
import { nodesLastPosition, nodesPhases } from "../../constants/nodes"
import { CustomEdge } from "../../components/CustomEdge"

const nodeTypes = {
  phase: PhaseNode,
}

const edgeTypes = {
  'custom-edge': CustomEdge,
}

export const points = 30

const horizontalLimit = 1100
const verticalBottomLimit = 300

const extend: CoordinateExtent = [
  [-horizontalLimit, nodesLastPosition], // Permite arrastar um pouco para a esquerda [minX, minY]
  [horizontalLimit, verticalBottomLimit], // Permite arrastar até 2000px para a direita [maxX, maxY]
  // O maxY na verdade é o máximo para baixo e minY é o máximo para cima
]

export const Map = () => {
  const [nodes, setNodes] = useState(nodesPhases)
  const [edges, setEdges] = useState(edgesPhases)

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )

  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )

  return (
    <div style={{ width: "100vw", height: "100vh"}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesConnectable={false}
        nodesDraggable={false}
        maxZoom={1.3}
        minZoom={0.5}
        translateExtent={extend}
        nodeTypes={nodeTypes}       
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ 
          nodes: [{ id: '1' }],
          zoom: 1,
          maxZoom: 0.8,
          minZoom: 0.5,
        } as FitViewOptions}
      >
        <MiniMap
          pannable
          zoomable
          position="top-right"
          className="mr-4 mb-4 hidden sm:block"
          nodeClassName="bg-blue-500"
        />
      </ReactFlow>
    </div>
  )
}
