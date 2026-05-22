import {
  ReactFlow,
  MiniMap,
  type FitViewOptions as FitViewOptionsType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodeTypes } from '../../data/constants/nodesPhases';
import { RankTable } from '@/features/RanksTable/container/RanksTable';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { useMap } from '@/hooks/useMap';
import { edgeTypes } from '@/data/constants/edges';
import { extend } from '@/data/constants';

export const Map = () => {
  const { isDesktop } = useMediaDevice();
  const { currentNode, edges, nodes, onEdgesChange, onNodesChange } = useMap();

  const miniMapStyles =
    'mr-4 mb-4 hidden sm:block overflow-hidden b-1 rounded-sm border border-primary-light';

  const fitViewOptions = {
    nodes: [{ id: currentNode.id }],
    zoom: 0.8,
    maxZoom: 0.8,
    minZoom: 0.5,
  } as FitViewOptionsType;

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
        fitViewOptions={fitViewOptions}
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
