import { Separator } from '@/components/ui/separator';
import { Badge } from '../../../components/ui/badge';
import { Card } from '../../../components/ui/card';
import { Folder, Notebook } from 'lucide-react';
import { DescriptionCircle } from '@/components/DescriptionCircle';
import type { Curso } from '@/data/types/api';
import { contarAtividadesDoCurso } from '@/data/temporaryMocks/cursos';

type CourseCardProps = {
  curso: Curso;
  onClick: () => void;
};

export const CourseCard = ({ curso, onClick }: CourseCardProps) => {
  const atividadesCount = contarAtividadesDoCurso(curso);
  const modulosLabel = `${curso.modulos.length} ${curso.modulos.length === 1 ? 'módulo' : 'módulos'}`;
  const atividadesLabel = `${atividadesCount} Ativ.`;

  return (
    <Card
      onClick={onClick}
      className="group flex flex-col gap-4 p-4 w-full md:max-w-68 max-md:h-40 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all ease-in"
    >
      <header>
        <Badge className="mb-3 bg-primary-light/20 text-primary-dark">
          {curso.codigoAcesso}
        </Badge>

        <h1 className="font-bold text-lg group-hover:text-primary">
          {curso.nome}
        </h1>

        <DescriptionCircle
          left={modulosLabel}
          right={atividadesLabel}
          fill="gray"
        />
      </header>

      <Separator />

      <div className="flex justify-between text-sm max-md:text-xs text-zinc-500 font-medium">
        <div className="flex items-center space-x-1">
          <Folder size={14} />
          <p>{modulosLabel}</p>
        </div>

        <div className="flex items-center space-x-1">
          <Notebook size={14} />
          <p>{atividadesLabel}</p>
        </div>
      </div>
    </Card>
  );
};
