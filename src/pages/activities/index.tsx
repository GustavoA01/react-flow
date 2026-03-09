import { ActivitiesHeader } from "./components/ActivitiesHeader";
import { useMediaDevice } from "@/hooks/useMediaDevice";
import { ActivityCard } from "./components/ActivityCard";
import { useState } from "react";
import { NewActivityDialog } from "./components/NewActivityDialog";

export const Activities = () => {
  const { containerClassName } = useMediaDevice();
  const [openActivityDialog, setOpenActivityDialog] = useState(false);

  return (
    <>
      <div className="flex flex-col h-dvh overflow-hidden">
        <ActivitiesHeader setOpenActivityDialog={setOpenActivityDialog} />

        <div
          className={`flex flex-col max-sm:pb-20 custom-bar gap-4 overflow-auto ${containerClassName}`}
        >
          {[...Array(12)].map((_, index) => (
            <ActivityCard key={index} />
          ))}
        </div>
      </div>

      <NewActivityDialog
        openActivityDialog={openActivityDialog}
        setOpenActivityDialog={setOpenActivityDialog}
      />
    </>
  );
};
