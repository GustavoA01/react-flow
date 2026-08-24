import { UserMenu } from '@/features/UserMenu/container/UserMenu';
import { GoBack } from './GoBack';
import { DrawerNavButton } from '@/features/DrawerNavigation/container/DrawerNavButton';
import { LogoutDialog } from './LogoutDialog';
import { useState } from 'react';

export const CourseSharedHeader = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="flex justify-between items-center text-blue-onSurface">
      <GoBack />
      <UserMenu onLogout={() => setOpenDialog(true)} />
      <DrawerNavButton />
      <LogoutDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </section>
  );
};
