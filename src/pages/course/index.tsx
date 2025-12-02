import { useMediaDevice } from "@/hooks/useMediaDevice"
import { CourseHeader } from "./components/CourseHeader"
import { ModuleCard } from "./components/ModuleCard"
import { motion } from "motion/react"

export const CoursePage = () => {
  const { paddingXlScreens } = useMediaDevice()

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <CourseHeader />

      <motion.div
        layoutScroll
        className={`flex flex-col custom-bar sm:large-bar px-2 -mt-10 overflow-y-auto sm:px-8 pb-4 ${paddingXlScreens}`}
      >
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
      </motion.div>
    </div>
  )
}
