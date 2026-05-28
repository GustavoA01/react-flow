export type PhaseProgressModalProps = {
  id: string;
  points: number;
  minPoints: number;
};

export type BarProgressProps = {
  minPoints: number;
  points: number;
  progress: number;
};

export type ModalHeaderProps = {
  level: string;
  concluded: boolean;
};
