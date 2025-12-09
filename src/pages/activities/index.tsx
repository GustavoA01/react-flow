import { ActivitiesHeader } from "./components/ActivitiesHeader";
import { useMediaDevice } from "@/hooks/useMediaDevice";
import { ActivityCard } from "./components/ActivityCard";

export const Activities = () => {
  const { paddingXlScreens } = useMediaDevice();

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <ActivitiesHeader />

      <div
        className={`flex flex-col pt-4 pb-4 custom-bar gap-4 overflow-auto  px-2 sm:px-8 ${paddingXlScreens}`}
      >
        {[...Array(12)].map((_, index) => (
          <ActivityCard key={index} />
        ))}
      </div>
    </div>
  );
};
