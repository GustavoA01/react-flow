import { Link, useLocation } from "react-router-dom"
import { useMediaQuery } from "@custom-react-hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { MessageCircle } from "lucide-react"
import { Chat } from "./Chat"

export const Header = () => {
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery("(min-width: 640px)")

  return (
    <header className="bg-primary text-white p-4">
      <div className="flex justify-between items-center">
        <h1>Beira Linha Play</h1>

        <div className="flex items-center gap-8">
          {pathname === "/activities" ? (
            <Drawer direction={isDesktop ? "right" : "bottom"} snapPoints={[1]}>
              <DrawerTrigger className="cursor-pointer">
                <MessageCircle size={20} />
              </DrawerTrigger>

              <DrawerContent>
                <Chat />
              </DrawerContent>
            </Drawer>
          ) : null}

          <Link to="/activities" className="hidden sm:block">
            Exercícios
          </Link>
          <Link to="/" className="hidden sm:block">
            Mapa
          </Link>
        </div>
      </div>
    </header>
  )
}
