import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { DrawerNavButton } from "@/features/DrawerNavigation/container/DrawerNavButton"
import { ChatDrawer } from "@/features/Chat/container/ChatDrawer"

const headerItems = [
  { name: "Cursos", path: "/cursos" },
  { name: "Medalhas", path: "/medalhas" },
  { name: "Mapa", path: "/" },
]

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className="flex justify-between items-center bg-primary text-white p-4">
      <h1 className="font-semibold select-none font-montserrat">
        <Link to="/">Beira Linha Play</Link>
      </h1>

      <div className="flex items-center gap-2">
        <ChatDrawer />

        {headerItems.map(({ name, path }) => (
          <Button
            key={path}
            className={`hidden sm:block text-md font-montserrat hover:bg-primary-dark/50 transition-all ease-in ${
              pathname === path ? "text-white" : "text-zinc-300"
            }`}
          >
            <Link key={name} to={path}>
              {name}
            </Link>
          </Button>
        ))}

        <DrawerNavButton />
      </div>
    </header>
  )
}
