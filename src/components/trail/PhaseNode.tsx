import { Handle, Position } from '@xyflow/react';
import { Dialog } from '../ui/dialog';
import { PhaseProgressModal } from '../../features/ProgressModal/container/PhaseProgressModal';
import type { PhaseNodeProps } from '@/data/types/reactFlow';
import { points } from '@/hooks/useMap';
import { usePhaseNode } from '@/hooks/usePhaseNode';

export const PhaseNode = ({ id, data: { minPoints } }: PhaseNodeProps) => {
  const {
    Icon,
    openDialog,
    setCloseDialog,
    baseBgClass,
    shineClass,
    iconClassName,
    overlayGradientClass,
  } = usePhaseNode(minPoints);

  return (
    <>
      <div
        onClick={() => setCloseDialog(true)}
        className="relative w-20 h-20 rounded-full select-none drop-shadow-lg transition-all ease-in hover:scale-105 cursor-pointer"
      >
        {/* camada de base */}
        <div className={`absolute inset-0 rounded-full ${baseBgClass}`} />

        {/* gradiente/anel superior para profundidade */}
        <div
          className={`absolute inset-0 bottom-[3px] rounded-full ${overlayGradientClass}`}
        />

        {/* brilho superior */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-full ${shineClass}`}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={32} className={`${iconClassName} drop-shadow-sm`} />
        </div>

        <Handle
          type="source"
          id={`${id}-top`}
          position={Position.Top}
          className="opacity-0 w-2 h-2"
        />
        <Handle
          type="target"
          id={`${id}-bottom`}
          position={Position.Bottom}
          className="opacity-0 w-2 h-2"
        />
      </div>

      <Dialog open={openDialog} onOpenChange={setCloseDialog}>
        <PhaseProgressModal id={id} points={points} minPoints={minPoints} />
      </Dialog>
    </>
  );
};
