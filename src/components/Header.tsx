import { Link } from 'react-router-dom';
import { DrawerNavButton } from '@/features/DrawerNavigation/container/DrawerNavButton';
import { HeaderDesktopNav } from './HeaderDesktopNav';
import { LogoutDialog } from './LogoutDialog';
import { useState } from 'react';

export const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <header className=" bg-primary text-white">
      <div className="flex justify-between items-center px-4 py-6 container mx-auto sm:px-6 lg:px-8">
        <h1 className="font-semibold select-none font-montserrat">
          <Link to="/">Beira Linha Play</Link>
        </h1>

        <nav className="flex items-center gap-2">
          <HeaderDesktopNav onLogout={() => setOpenDialog(true)} />
          <DrawerNavButton />
        </nav>
        <LogoutDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </div>
    </header>
  );
};
