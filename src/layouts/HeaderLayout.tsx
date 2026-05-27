import { BottomNavigation } from '@/components/BottomNavigation';
import { Header } from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { bottomNavigateButtons } from '@/data/constants';

export const HeaderLayout = () => {
  const { pathname } = useLocation();

  const shouldShowBottomNav = bottomNavigateButtons.some(
    ({ to }) => to === pathname
  );

  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <Outlet />
      {shouldShowBottomNav && <BottomNavigation />}
    </div>
  );
};
