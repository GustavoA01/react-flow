import { Bell, BookOpen, CircleStar, LogOut, Map, UserPen } from "lucide-react";
import { DrawerNavHeader } from "../components/DrawerNavHeader";
import { DrawerSection } from "../components/DrawerSection";

type DrawerNavigationProps = {
  pathName: string;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DrawerNavigation = ({
  pathName,
  setOpenDrawer,
  setOpenDialog,
}: DrawerNavigationProps) => {
  const headerAcademicItems = [
    {
      label: "Cursos",
      path: "/cursos",
      icon: BookOpen,
      onClick: () => setOpenDrawer(false),
    },
  ];

  const headerConquestItems = [
    {
      label: "Mapa",
      path: "/",
      icon: Map,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: "Medalhas",
      path: "/medalhas",
      icon: CircleStar,
      onClick: () => setOpenDrawer(false),
    },
  ];

  const configurationItems = [
    {
      label: "Minha conta",
      path: "/",
      icon: UserPen,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: "Notificações",
      path: "/",
      icon: Bell,
      onClick: () => setOpenDrawer(false),
    },
    {
      label: "Sair",
      path: "/",
      icon: LogOut,
      onClick: () => {
        setOpenDrawer(false);
        setOpenDialog(true);
      },
    },
  ];

  return (
    <>
      <DrawerNavHeader />

      <nav className="flex flex-col scrollbar-hidden pb-4 overflow-y-auto pt-4 px-3 space-y-4">
        <DrawerSection
          title="ACADÊMICO"
          sectionItens={headerAcademicItems}
          pathName={pathName}
        />

        <DrawerSection
          title="CONQUISTAS"
          sectionItens={headerConquestItems}
          pathName={pathName}
        />

        <DrawerSection
          title="CONFIGURAÇÕES"
          sectionItens={configurationItems}
          pathName={pathName}
        />
      </nav>
    </>
  );
};
