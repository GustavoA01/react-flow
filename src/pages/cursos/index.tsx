import { CourseCard } from '@/pages/cursos/components/CourseCard';
import { CoursesHeader } from './components/CoursesHeader';
import { useNavigate } from 'react-router-dom';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { motion } from 'framer-motion';
import { temporaryCursos } from '@/data/temporaryMocks/cursos';

export const CoursesPage = () => {
  const { containerClassName } = useMediaDevice();
  const navigate = useNavigate();

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
              onClick={() => navigate(`/cursos/${curso.id}`)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
