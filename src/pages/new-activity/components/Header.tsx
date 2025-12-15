import { GoBack } from "@/components/GoBack";
import { ChatDrawer } from "@/features/Chat/container/ChatDrawer";
import { useMediaDevice } from "@/hooks/useMediaDevice";

export const Header = ({ activityName }: { activityName: string }) => {
  const { paddingXlScreens } = useMediaDevice();

  return (
    <header
      className={`flex justify-between items-center bg-primary p-4 text-blue-onSurface font-semibold ${paddingXlScreens}`}
    >
      <GoBack />
      <h1>{activityName}</h1>
      <ChatDrawer />
    </header>
  );
};
