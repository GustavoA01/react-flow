import { DrawerNavigation } from "@/features/DrawerNavigation/container/DrawerNavContent"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { useLocation } from "react-router-dom"
import { useState } from "react"

export const DrawerNavButton = () => {
  const [openDrawer,setOpenDrawer] = useState(false)
  const { pathname } = useLocation()
  
  return (
    <div className="sm:hidden flex">
      <Drawer direction="right" open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerTrigger className="ml-2">
          <Menu size={18} />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col border-none">
          <DrawerNavigation pathName={pathname} setOpenDrawer={setOpenDrawer} />
        </DrawerContent>
      </Drawer>
    </div>
  )
}
