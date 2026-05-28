import { backgroundNodes } from '@/data/constants/nodesBackgorund';
import { nodesPhases } from '@/data/constants/nodesPhases';
import { useCallback, useState } from 'react';
import {
  applyEdgeChanges,
  applyNodeChanges,
  type EdgeChange,
  type NodeChange,
} from '@xyflow/react';
import { edgesPhases } from '@/data/constants/edges';
import type {
  BackgroundNodeType,
  PhaseEdgeType,
  PhaseNodeType,
} from '@/data/types/reactFlow';

export const points = 40;

export const useMap = () => {
  const initialNodes = [...backgroundNodes, ...nodesPhases];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(edgesPhases);

  const onNodesChange = useCallback(
    (changes: NodeChange<BackgroundNodeType | PhaseNodeType>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<PhaseEdgeType>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  const unlockedPhases = nodes.filter((node) => {
    if (node.type === 'phase') return node.data.minPoints <= points;
  });

  const currentNode =
    unlockedPhases.length > 0
      ? unlockedPhases[unlockedPhases.length - 1]
      : nodes[0];

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    currentNode,
  };
};
