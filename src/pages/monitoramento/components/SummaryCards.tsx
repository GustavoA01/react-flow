import { Users, Percent, Zap, CircleAlert } from 'lucide-react';
import { StatCard } from './StatCard';

type SummaryCardsProps = {
  submissions: number;
  classSize: number;
  averageAccuracy: number;
  averageScore: number;
  hardestQuestion?: number;
};

export const SummaryCards = ({
  submissions,
  classSize,
  averageAccuracy,
  averageScore,
  hardestQuestion,
}: SummaryCardsProps) => (
  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
    <StatCard
      icon={Users}
      label="Envios"
      value={`${submissions} de ${classSize}`}
      hint="Alunos que já responderam"
    />
    <StatCard
      icon={Percent}
      label="Acertos"
      value={`${averageAccuracy}%`}
      hint="Média da turma"
    />
    <StatCard
      icon={Zap}
      label="Pontuação"
      value={`${averageScore} pts`}
      hint="Média por envio"
    />
    <StatCard
      icon={CircleAlert}
      label="Mais difícil"
      value={hardestQuestion ? `Q${hardestQuestion}` : '—'}
      hint="Menor taxa de acerto"
    />
  </div>
);
