import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { useMediaDevice } from "@/hooks/useMediaDevice"
import { MessageCircle } from "lucide-react"
import { useLocation } from "react-router-dom"
import { Chat } from "./Chat"

export const ChatDrawer = () => {
  const { pathname } = useLocation()
  const { isDesktop } = useMediaDevice()
  console.log(isDesktop)
  return (
    <>
      {pathname === "/cursos" ? (
        <Drawer direction={isDesktop ? "right" : "bottom"} snapPoints={[1]}>
          <DrawerTrigger
            className={
              "sm:py-2 px-2 rounded-md text-md font-montserrat hover:bg-primary-dark transition-all ease-in"
            }
          >
            <MessageCircle className="text-zinc-300" size={18} />
          </DrawerTrigger>

          <DrawerContent>
            <Chat />
          </DrawerContent>
        </Drawer>
      ) : null}
    </>
  )
}
