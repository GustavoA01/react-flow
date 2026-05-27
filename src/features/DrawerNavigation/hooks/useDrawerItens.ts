import {
  Bell,
  BookOpen,
  CircleStar,
  LogOut,
  Map as MapIcon,
  Trophy,
  UserPen,
} from 'lucide-react';

type useDrawerItensProps = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useDrawerItens = ({
  setOpenDrawer,
  setOpenDialog,
}: useDrawerItensProps) => {
  const headerAcademicItems = [
    {
      label: 'Cursos',
      path: '/cursos',
      icon: BookOpen,
      onClick: () => setOpenDrawer(false),
    },
  ];

  const headerConquestItems = [
    {
      label: 'Mapa',
      path: '/',
      icon: MapIcon,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: 'Rankings',
      path: '/rankings',
      icon: Trophy,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: 'Medalhas',
      path: '/medalhas',
      icon: CircleStar,
      onClick: () => setOpenDrawer(false),
    },
  ];

  const configurationItems = [
    {
      label: 'Minha conta',
      path: '/',
      icon: UserPen,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: 'Notificações',
      path: '/',
      icon: Bell,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: 'Sair',
      path: '/',
      icon: LogOut,
      onClick: () => {
        setOpenDrawer(false);
        setOpenDialog(true);
      },
    },
  ];

  return {
    headerAcademicItems,
    headerConquestItems,
    configurationItems,
  };
};
