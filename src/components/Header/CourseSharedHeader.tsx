import { HeaderDesktopNav } from './HeaderDesktopNav';
import { GoBack } from '../GoBack';
import { DrawerNavButton } from '@/features/DrawerNavigation/container/DrawerNavButton';
import { LogoutDialog } from '../LogoutDialog';
import { useState } from 'react';

export const CourseSharedHeader = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="flex justify-between items-center text-blue-onSurface">
      <GoBack />
      <div className="flex items-center gap-2">
        <HeaderDesktopNav onLogout={() => setOpenDialog(true)} />
        <DrawerNavButton />
      </div>
      <LogoutDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </section>
  );
};
