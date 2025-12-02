import { CourseCard } from "@/pages/courses/components/CourseCard"
import { CoursesHeader } from "./components/CoursesHeader"
import { useNavigate } from "react-router-dom"

export const Courses = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col p-4 sm:p-8 h-dvh custom-bar sm:large-bar overflow-hidden">
      <CoursesHeader />

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 pt-2 sm:mt-8 overflow-y-auto overflow-x-hidden space-x-8 space-y-4">
        <CourseCard onClick={() => navigate("/curso")} />
        <CourseCard onClick={() => navigate("/curso")} />
        <CourseCard onClick={() => navigate("/curso")} />
        <CourseCard onClick={() => navigate("/curso")} />
        <CourseCard onClick={() => navigate("/curso")} />
      </div>
    </div>
  )
}
