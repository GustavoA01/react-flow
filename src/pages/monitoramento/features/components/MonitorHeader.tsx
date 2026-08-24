import { CourseSharedHeader } from '@/components/CourseSharedHeader';
import { DescriptionCircle } from '@/components/DescriptionCircle';
import type { Atividade } from '@/data/types/api';

type MonitorHeaderPropsType = {
  activity: Atividade;
  totalXp: number;
};

export const MonitorHeader = ({
  activity,
  totalXp,
}: MonitorHeaderPropsType) => {
  const questionsLabel = `${activity.quantQuestoes} ${activity.quantQuestoes === 1 ? 'questão' : 'questões'}`;

  return (
    <header className="bg-blue-puc rounded-b-4xl pb-10">
      <div className="container mx-auto px-4 pt-4 sm:px-8 sm:pt-8">
        <CourseSharedHeader />

        <p className="mt-4 text-xs font-semibold tracking-wide text-blue-onSurface uppercase">
          Análise da turma
        </p>
        <h1 className="font-fredoka text-white font-semibold md:text-4xl text-3xl mt-1 mb-2">
          {activity.titulo}
        </h1>
        <DescriptionCircle
          left={questionsLabel}
          right={`${totalXp} XP`}
          fill="blue-onSurface"
          textColor="blue-onSurface"
        />
      </div>
    </header>
  );
};
