import { CourseCard } from "@/pages/courses/components/CourseCard"
import { CoursesHeader } from "./components/CoursesHeader"
import { useNavigate } from "react-router-dom"

export const Courses = () => {
  const navigate = useNavigate()

  return (
    <div className="p-4">
      <CoursesHeader />

      <div className="flex mt-8 space-x-8 space-y-4 max-md:flex-col">
        <CourseCard onClick={() => navigate('/curso')}/>
      </div>
    </div>
  )
}
