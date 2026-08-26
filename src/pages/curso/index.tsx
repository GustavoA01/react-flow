import { CourseHeader } from './components/CourseHeader';
import { ModuleCard } from './components/ModuleCard';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCursoById } from '@/data/temporaryMocks/cursos';
import { CourseSharedHeader } from '@/components/CourseSharedHeader';
import { useAuthUser } from '@/providers/UserProvider';

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
  const { isAluno, isMonitor } = useAuthUser();

  if (!curso) {
    return (
      <div className="flex flex-col h-dvh">
        <header className="bg-blue-puc px-4 pt-4 sm:px-8 sm:pt-8 pb-8">
          <CourseSharedHeader />
        </header>
        <p className="mt-8 text-center font-semibold text-zinc-500">
          Curso não encontrado
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <CourseHeader curso={curso} isAluno={isAluno} isMonitor={isMonitor}/>
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
  );
};
