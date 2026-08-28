import { useState } from 'react';
import { CourseHeader } from './components/CourseHeader';
import { ModuleCard } from './components/ModuleCard';
import { NewModuleDialog } from './components/NewModuleDialog';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCursoById } from '@/data/temporaryMocks/cursos';
import { useAuthUser } from '@/providers/UserProvider';
import { ResourceNotFound } from '@/components/ResourceNotFound';
import { NewCourseDialog } from '@/pages/cursos/components/NewCourseDialog';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export const CoursePage = () => {
  const navigate = useNavigate();
  const { cursoId } = useParams();
  const curso = cursoId ? getCursoById(cursoId) : undefined;
  const { isAluno, isMonitor, isAdmin } = useAuthUser();
  const [openModuleDialog, setOpenModuleDialog] = useState(false);
  const [openEditCourseDialog, setOpenEditCourseDialog] = useState(false);

  if (!curso) return <ResourceNotFound label="Curso não encontrado" />;

  return (
    <>
      <div className="flex flex-col h-dvh overflow-hidden">
        <CourseHeader
          curso={curso}
          isAluno={isAluno}
          isMonitor={isMonitor}
          isAdmin={isAdmin}
          handleNewModule={() => setOpenModuleDialog(true)}
          handleEditCourse={() => setOpenEditCourseDialog(true)}
          handleDeleteCourse={() => console.log({ action: 'delete-course', id: curso.id })}
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex-1 min-h-0 custom-bar sm:large-bar -mt-10 overflow-y-auto pb-4 container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col  pb-20">
            {curso.modulos.map((modulo) => (
              <motion.div key={modulo.id} variants={itemVariants}>
                <ModuleCard
                  modulo={modulo}
                  isMonitor={isMonitor}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  onClick={() =>
                    navigate(`/cursos/${curso.id}/modulos/${modulo.id}`)
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <NewModuleDialog
        open={openModuleDialog}
        onOpenChange={setOpenModuleDialog}
      />
      <NewCourseDialog
        open={openEditCourseDialog}
        onOpenChange={setOpenEditCourseDialog}
        curso={curso}
      />
    </>
  );
};
