import { Card } from '@/components/ui/card';
import type { Users } from 'lucide-react';

type StatCardPropsType = {
  icon: typeof Users;
  label: string;
  value: string;
  hint: string;
};

export const StatCard = ({
  icon: Icon,
  label,
  value,
  hint,
}: StatCardPropsType) => (
  <Card className="gap-2 p-4 shadow-sm">
    <div className="flex items-center gap-2 text-primary">
      <Icon size={16} />
      <p className="text-xs font-semibold text-zinc-500 uppercase">{label}</p>
    </div>
    <p className="font-fredoka text-2xl font-semibold text-primary-dark">
      {value}
    </p>
    <p className="text-xs text-zinc-400">{hint}</p>
  </Card>
);
