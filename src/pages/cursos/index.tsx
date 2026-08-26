import { useState } from 'react';
import { CourseCard } from '@/pages/cursos/components/CourseCard';
import { CoursesHeader } from './components/CoursesHeader';
import { CodeDialog } from './components/CodeDialog';
import { useNavigate } from 'react-router-dom';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { motion } from 'framer-motion';
import { temporaryCursos } from '@/data/temporaryMocks/cursos';
import { getMonitorById } from '@/data/temporaryMocks/monitores';
import type { Curso } from '@/data/types/api';

const enrolledCourseIds = ['curso-calculo-1'];

export const CoursesPage = () => {
  const navigate = useNavigate();
  const { containerClassName } = useMediaDevice();
  const [openCodeDialog, setOpenCodeDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Curso | null>(null);

  const openCourse = (curso: Curso) => navigate(`/cursos/${curso.id}`);

  const handleCourseClick = (curso: Curso) => {
    if (enrolledCourseIds.includes(curso.id)) {
      openCourse(curso);
      return;
    }
    setSelectedCourse(curso);
    setOpenCodeDialog(true);
  };

  const handleCodeSubmit = (code: string) => {
    if (!selectedCourse) return 'Curso não encontrado';
    if (code.toUpperCase() !== selectedCourse.codigoAcesso.toUpperCase()) {
      return 'Código inválido';
    }
    openCourse(selectedCourse);
  };

  return (
    <div
      className={`flex flex-col ${containerClassName} h-dvh custom-bar sm:large-bar overflow-hidden`}
    >
      <CoursesHeader />

      <div className="flex flex-col scrollbar-hidden overflow-y-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4 sm:mt-8 pb-18 pt-2 gap-4">
        {temporaryCursos.map((curso, index) => (
          <motion.div
            key={curso.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <CourseCard
              curso={curso}
              locked={!enrolledCourseIds.includes(curso.id)}
              onClick={() => handleCourseClick(curso)}
              monitorNome={getMonitorById(curso.monitorId)?.nome ?? 'Monitor'}
            />
          </motion.div>
        ))}
      </div>

      <CodeDialog
        open={openCodeDialog}
        onOpenChange={setOpenCodeDialog}
        onSubmit={handleCodeSubmit}
      />
    </div>
  );
};
