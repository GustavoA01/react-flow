import { CourseHeader } from "./components/CourseHeader"
import { ModuleCard } from "./components/ModuleCard"

export const CoursePage = () => {
  return (
    <div>
      <CourseHeader />

      <div className="flex flex-col px-2 sm:px-8">
        <ModuleCard />
      </div>
    </div>
  )
}
