import { ActivitiesHeader } from "./components/ActivitiesHeader"
import { useMediaDevice } from "@/hooks/useMediaDevice"
import { ActivityCard } from "./components/ActivityCard"

export const Activities = () => {
  const { paddingXlScreens } = useMediaDevice()

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <ActivitiesHeader />

      <div
        className={`flex flex-col gap-4 overflow-auto h-40 px-2 sm:px-8 ${paddingXlScreens}`}
      >
        <ActivityCard/>
      </div>
    </div>
  )
}
