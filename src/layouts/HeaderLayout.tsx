import { BottomNavigation } from "@/components/BottomNavigation";
import { Header } from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

export const HeaderLayout = () => {
  const { pathname } = useLocation();

  const bottomNavRoutes = ["/", "/cursos", "/rankings"];
  const shouldShowBottomNav = bottomNavRoutes.includes(pathname);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      {shouldShowBottomNav && <BottomNavigation />}
    </div>
  );
};
