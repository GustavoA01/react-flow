import { CourseSharedHeader } from '@/components/Header/CourseSharedHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NewButtonFloat } from '@/components/NewButtonFloat';
import { Progress } from '@/components/ui/progress';
import type { CursoType } from '@/data/types/api';
import { Pencil, Trash2 } from 'lucide-react';

type CourseHeaderProps = {
  curso: CursoType;
  isAluno: boolean;
  isMonitor: boolean;
  isAdmin: boolean;
  handleNewModule: () => void;
  handleEditCourse: () => void;
  handleDeleteCourse: () => void;
};

export const CourseHeader = ({
  curso,
  isAluno,
  isMonitor,
  isAdmin,
  handleNewModule,
  handleEditCourse,
  handleDeleteCourse,
}: CourseHeaderProps) => (
  <header className={` bg-blue-puc rounded-b-4xl pb-14`}>
    <div className="px-4 pt-4 sm:px-8 sm:pt-8 container mx-auto">
      <CourseSharedHeader />

      <div className="mt-4 mb-2 flex items-center gap-1">
        <h1 className="font-fredoka text-white font-semibold md:text-4xl text-3xl min-w-0">
          {curso.nome}
        </h1>

        {isAdmin && (
          <div className="flex items-center shrink-0">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Editar curso"
              className="rounded-full text-blue-onSurface hover:text-white hover:bg-white/10"
              onClick={handleEditCourse}
            >
              <Pencil />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Excluir curso"
              className="rounded-full text-blue-onSurface hover:text-red-200 hover:bg-white/10"
              onClick={handleDeleteCourse}
            >
              <Trash2 />
            </Button>
          </div>
        )}
      </div>

      {isMonitor && (
        <div className="flex justify-between items-center">
          <p className="text-blue-onSurface max-sm:text-sm">
            Código {curso.codigoAcesso}
          </p>
          <NewButtonFloat text="Novo Módulo" onClick={handleNewModule} />
        </div>
      )}

      {isAluno && (
        <Card className="mt-4 p-4 gap-3 bg-blue-900/50 border border-blue-onSurface/30 rounded-lg w-full text-sm">
          <div className="flex justify-between text-center">
            <p className="text-blue-onSurface font-bold text-xs sm:text-sm">
              Progresso do Curso
            </p>
            <p className="text-white text-xs sm:text-sm">50%</p>
          </div>

          <Progress
            value={50}
            barColor="bg-green-400"
            className="bg-primary-dark"
          />
        </Card>
      )}
    </div>
  </header>
);
