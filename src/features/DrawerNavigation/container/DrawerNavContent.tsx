import { BookOpen, CircleStar, LogOut, Map } from "lucide-react"
import { DrawerNavHeader } from "../components/DrawerNavHeader"
import { DrawerSection } from "../components/DrawerSection"

const headerAcademicItems = [
  { name: "Cursos", path: "/cursos", icon: BookOpen },
]

const headerConquestItems = [
  { name: "Mapa", path: "/", icon: Map },
  { name: "Medalhas", path: "/medalhas", icon: CircleStar },
]

const configurationItems = [
  { name: "Sair", path: "/", icon: LogOut },
]

type DrawerNavigationProps = {
  pathName: string
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerNavigation = ({ pathName, setOpenDrawer }: DrawerNavigationProps) => {
  return (
    <>
      <DrawerNavHeader />

      <nav className="flex flex-col scrollbar-hidden pb-4 overflow-y-auto pt-4 px-3 space-y-4">
        <DrawerSection
          title="ACADÊMICO"
          sectionItens={headerAcademicItems}
          pathName={pathName}
          onCloseDrawer={() => setOpenDrawer(false)}
        />

        <DrawerSection
          title="CONQUISTAS"
          sectionItens={headerConquestItems}
          pathName={pathName}
          onCloseDrawer={() => setOpenDrawer(false)}
        />

        <DrawerSection
          title="CONFIGURAÇÕES"
          sectionItens={configurationItems}
          pathName={pathName}
          onCloseDrawer={() => setOpenDrawer(false)}
        />
      </nav>
    </>
  )
}
