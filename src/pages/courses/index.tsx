import { CourseCard } from "@/pages/courses/components/CourseCard";
import { CoursesHeader } from "./components/CoursesHeader";
import { useNavigate } from "react-router-dom";

export const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-4 sm:p-8 h-dvh custom-bar sm:large-bar overflow-hidden">
      <CoursesHeader />

      <div className="flex flex-col scrollbar-hidden overflow-y-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4 sm:mt-8 pb-18 pt-2 gap-4">
        {[...Array(8)].map((_, index) => (
          <CourseCard key={index} onClick={() => navigate("/cursos/curso")} />
        ))}
      </div>
    </div>
  );
};
