import { Progress } from "@/components/ui/progress";

type BarProgressProps = {
  minPoints: number;
  points: number;
  progress: number;
};

export const BarProgress = ({
  minPoints,
  points,
  progress,
}: BarProgressProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xs text-zinc-500">
          Você acumulou <span className="font-bold">{points}</span> de{" "}
          {minPoints} pontos
        </p>

        <p className="text-zinc-400 font-bold">{progress}%</p>
      </div>

      <Progress
        value={progress}
        barColor={
          progress === 100
            ? "bg-linear-to-l from-green-400 to-emerald-700"
            : "bg-linear-to-r from-blue-300 to-indigo-600"
        }
      />
    </div>
  );
};
