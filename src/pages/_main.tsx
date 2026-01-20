import { BottomNavigation } from "@/components/BottomNavigation";
import { Header } from "@/components/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const Main = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-1 overflow-auto">
      <Outlet />
    </div>
    <BottomNavigation />
  </div>
);

export const Route = createFileRoute("/_main")({
  component: Main,
});
