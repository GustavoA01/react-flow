import { useMediaDevice } from "@/hooks/useMediaDevice";
import { CourseHeader } from "./components/CourseHeader";
import { ModuleCard } from "./components/ModuleCard";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export const CoursePage = () => {
  const { padding2XlScreens } = useMediaDevice();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <CourseHeader />

      <motion.div
        layoutScroll
        className={`flex flex-col custom-bar sm:large-bar px-2 -mt-10 overflow-y-auto sm:px-8 pb-4 ${padding2XlScreens}`}
      >
        {[...Array(10)].map((_, index) => (
          <ModuleCard
            key={index}
            onClick={() => navigate("/cursos/curso/atividades")}
          />
        ))}
      </motion.div>
    </div>
  );
};
