import { Link, useLocation } from "react-router-dom"
import { useMediaQuery } from "@custom-react-hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { MessageCircle } from "lucide-react"
import { Chat } from "../features/Chat/container/Chat"

export const Header = () => {
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery("(min-width: 640px)")

  return (
    <header className="flex justify-between items-center bg-primary text-white p-4">
        <h1 className="font-semibold font-montserrat">
          <Link to="/">Beira Linha Play</Link>
        </h1>

        <div className="flex items-center gap-8">
          {pathname === "/cursos" ? (
            <Drawer direction={isDesktop ? "right" : "bottom"} snapPoints={[1]}>
              <DrawerTrigger className="cursor-pointer">
                <MessageCircle size={18} />
              </DrawerTrigger>

              <DrawerContent>
                <Chat />
              </DrawerContent>
            </Drawer>
          ) : null}

          <Link to="/cursos" className="hidden font-montserrat sm:block">
            Cursos
          </Link>
          <Link to="/" className="hidden font-montserrat sm:block">
            Mapa
          </Link>
      </div>
    </header>
  )
}
