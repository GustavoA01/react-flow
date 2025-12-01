import type { Node, NodeProps } from "@xyflow/react"

export type PhaseNodeType = {
  id: string
  type: "phase"
  position: { x: number; y: number }
  data: PhaseNodeDataType
}

export type PhaseNodeDataType = {
  id: string
  minPoints: number
}

export type PhaseEdgeType = {
  id: string
  source: string
  target: string
  type: string
}

export type BackgorundNodeType = {
  id: string
  type: "background"
  position: { x: number; y: number }
  data: BackgroundNodeDataType
  zIndex: number
  draggable: boolean
  selectable: boolean
}

export type BackgroundNodeDataType = {
  id: string
  image: string
  alt: string
  width: number
  height: number
}

type PhaseNode = Node<PhaseNodeDataType, "phase">
type BackgroundNode = Node<BackgroundNodeDataType, "background">

export type PhaseNodeProps = NodeProps<PhaseNode>
export type BackgroundNodeProps = NodeProps<BackgroundNode>
