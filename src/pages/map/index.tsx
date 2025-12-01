import { useState, useCallback } from "react"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  type CoordinateExtent,
  type FitViewOptions,
  type NodeTypes,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { PhaseNode } from "../../components/trail/PhaseNode"
import { edgesPhases } from "../../data/constants/edges"
import {
  nodesLastPosition,
  nodesPhases,
} from "../../data/constants/nodesPhases"
import { CustomEdge } from "../../components/trail/CustomEdge"
import { RankTable } from "@/features/RanksTable/container/RanksTable"
import BackgroundNode from "@/components/trail/BackgroundNode"
import { backgroundNodes } from "@/data/constants/nodesBackgorund"
import { useMediaDevice } from "@/hooks/useMediaDevice"

const nodeTypes: NodeTypes = {
  phase: PhaseNode,
  background: BackgroundNode,
}

const edgeTypes = {
  "custom-edge": CustomEdge,
}

export const points = 40

const horizontalLimit = 1500
const verticalBottomLimit = 500

const extend: CoordinateExtent = [
  [-horizontalLimit, nodesLastPosition], // Permite arrastar um pouco para a esquerda [minX, minY]
  [horizontalLimit, verticalBottomLimit], // Permite arrastar até 2000px para a direita [maxX, maxY]
  // O maxY na verdade é o máximo para baixo e minY é o máximo para cima
]

const initialNodes = [...backgroundNodes, ...nodesPhases]

export const Map = () => {
  const { isDesktop } = useMediaDevice()
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(edgesPhases)

  const miniMapStyles = "mr-4 mb-4 hidden sm:block overflow-hidden b-1 rounded-sm border border-primary-light"

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

  const unlockedPhases = nodes.filter((node) => {
    if (node.type === "phase") {
      return node.data.minPoints <= points
    }
  })
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
        proOptions={{ hideAttribution: true }}
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
          className={miniMapStyles}
          bgColor="transparent"
          nodeColor={({ type }) =>
            type === "background" ? "transparent" : "#2D5586"
          }
        />
      </ReactFlow>
    </div>
  )
}
