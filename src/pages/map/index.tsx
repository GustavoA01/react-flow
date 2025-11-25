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
import { RankTable } from "@/components/RankTable"
import { useMediaQuery } from "@custom-react-hooks/use-media-query"

const nodeTypes = {
  phase: PhaseNode,
}

const edgeTypes = {
  "custom-edge": CustomEdge,
}

export const points = 40

const horizontalLimit = 600
const verticalBottomLimit = 500

const extend: CoordinateExtent = [
  [-horizontalLimit, nodesLastPosition], // Permite arrastar um pouco para a esquerda [minX, minY]
  [horizontalLimit, verticalBottomLimit], // Permite arrastar até 2000px para a direita [maxX, maxY]
  // O maxY na verdade é o máximo para baixo e minY é o máximo para cima
]

export const Map = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)")
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

  const unlockedPhases = nodes.filter((node) => node.data.minPoints <= points)
  const currentNode =
    unlockedPhases.length > 0
      ? unlockedPhases[unlockedPhases.length - 1]
      : nodes[0]

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {isDesktop && <RankTable />}

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
        fitViewOptions={
          {
            nodes: [{ id: currentNode.id }],
            zoom: 0.8,
            maxZoom: 0.8,
            minZoom: 0.5,
          } as FitViewOptions
        }
      >
        <MiniMap
          pannable
          zoomable
          position="top-right"
          className="mr-4 mb-4 hidden sm:block"
          nodeClassName=""
        />
      </ReactFlow>
    </div>
  )
}
