import { DrawerNavHeader } from '../components/DrawerNavHeader';
import { DrawerSection } from '../components/DrawerSection';
import { useDrawerItens } from '../hooks/useDrawerItens';

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
  const { configurationItems, headerAcademicItems, headerConquestItems } =
    useDrawerItens({ setOpenDrawer, setOpenDialog });

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
