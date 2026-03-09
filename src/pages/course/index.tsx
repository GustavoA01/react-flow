import { CourseHeader } from "./components/CourseHeader";
import { ModuleCard } from "./components/ModuleCard";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <CourseHeader />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={`flex-1 min-h-0 custom-bar sm:large-bar -mt-10 overflow-y-auto pb-4 container mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="flex flex-col  pb-20">
          {[...Array(10)].map((_, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ModuleCard
                onClick={() => navigate("/cursos/curso/atividades")}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
