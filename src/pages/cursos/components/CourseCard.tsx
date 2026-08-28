import { Card } from '@/components/ui/card';
import { DescriptionCircle } from '@/components/DescriptionCircle';
import type { CursoType } from '@/data/types/api';
import { contarAtividadesDoCurso } from '@/data/temporaryMocks/cursos';
import { cn } from '@/lib/utils';

type CourseCardPropsType = {
  curso: CursoType;
  monitorNome: string;
  locked?: boolean;
  onClick: () => void;
  isMonitor: boolean;
  codCurso: string;
};

export const CourseCard = ({
  curso,
  monitorNome,
  locked = false,
  onClick,
  isMonitor,
  codCurso,
}: CourseCardPropsType) => {
  const atividadesCount = contarAtividadesDoCurso(curso);
  const modulosLabel = `${curso.modulos.length} ${curso.modulos.length === 1 ? 'módulo' : 'módulos'}`;
  const atividadesLabel = `${atividadesCount} Ativ.`;

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group flex flex-col gap-4 p-4 w-full md:max-w-68 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all ease-in',
        {
          'opacity-50': locked,
        }
      )}
    >
      <header>
        <h1 className="font-bold text-lg group-hover:text-primary">
          {curso.nome}
        </h1>
        
        <p className="text-sm text-zinc-500 mt-1 truncate">
          {isMonitor ? codCurso : monitorNome}
        </p>

        <DescriptionCircle
          className="mt-3"
          left={modulosLabel}
          right={atividadesLabel}
        />
      </header>
    </Card>
  );
};
