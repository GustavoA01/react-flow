import { DialogContent } from '../../../components/ui/dialog';
import { ModalHeader } from '../components/ModalHeader';
import { BarProgress } from '../components/BarProgress';
import { ModalFooter } from '../components/ModalFooter';
import type { PhaseProgressModalProps } from '../types';

export const PhaseProgressModal = ({
  id,
  points,
  minPoints,
}: PhaseProgressModalProps) => {
  const progress = Math.min(100, Math.round((points / minPoints) * 100));
  const concluded = progress === 100;

  return (
    <DialogContent
      showCloseButton={false}
      className={
        concluded
          ? 'bg-linear-to-l from-green-500 to-emerald-600'
          : 'bg-linear-to-r from-blue-400 to-indigo-500'
      }
    >
      <ModalHeader level={id} concluded={concluded} />

      <div className="bg-white p-4 rounded-md">
        <BarProgress
          points={points}
          progress={progress}
          minPoints={minPoints}
        />

        <ModalFooter concluded={concluded} />
      </div>
    </DialogContent>
  );
};
