import { BottomNavigation } from "@/components/BottomNavigation";
import { Header } from "@/components/Header";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => {
  const { pathname } = useLocation();

  const bottomNavRoutes = ["/", "/cursos", "/rankings"];
  const shouldShowBottomNav = bottomNavRoutes.includes(pathname);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      {shouldShowBottomNav && <BottomNavigation />}
      <TanStackRouterDevtools />
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
