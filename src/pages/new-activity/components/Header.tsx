import { GoBack } from "@/components/GoBack";
import { ChatDrawer } from "@/features/Chat/container/ChatDrawer";

export const Header = ({ activityName }: { activityName: string }) => {
  return (
    <header className={` bg-primary p-4 text-blue-onSurface font-semibold`}>
      <div className="flex justify-between items-center container mx-auto px-4">
        <GoBack />
        <h1>{activityName}</h1>
        <ChatDrawer />
      </div>
    </header>
  );
};
