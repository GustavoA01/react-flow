import {
  ReactFlow,
  MiniMap,
  type CoordinateExtent,
  type FitViewOptions,
  type NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { PhaseNode } from '../../components/trail/PhaseNode';
import { nodesLastPosition } from '../../data/constants/nodesPhases';
import { CustomEdge } from '../../components/trail/CustomEdge';
import { RankTable } from '@/features/RanksTable/container/RanksTable';
import BackgroundNode from '@/components/trail/BackgroundNode';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { useMap } from '@/hooks/useMap';

const nodeTypes: NodeTypes = {
  phase: PhaseNode,
  background: BackgroundNode,
};

const edgeTypes = {
  'custom-edge': CustomEdge,
};

export const Map = () => {
  const { isDesktop } = useMediaDevice();
  const { currentNode, edges, nodes, onEdgesChange, onNodesChange } = useMap();

  const horizontalLimit = 1500;
  const verticalBottomLimit = 500;

  const extend: CoordinateExtent = [
    [-horizontalLimit, nodesLastPosition], // Permite arrastar um pouco para a esquerda [minX, minY]
    [horizontalLimit, verticalBottomLimit], // Permite arrastar até 1500px para a direita [maxX, maxY]
    // O maxY na verdade é o máximo para baixo e minY é o máximo para cima
  ];

  const miniMapStyles =
    'mr-4 mb-4 hidden sm:block overflow-hidden b-1 rounded-sm border border-primary-light';

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {isDesktop && (
        <div className="container mx-auto">
          <RankTable />
        </div>
      )}

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
            type === 'background' ? 'transparent' : '#2D5586'
          }
        />
      </ReactFlow>
    </div>
  );
};
