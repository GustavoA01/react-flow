import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useAnimateBg } from "@/hooks/useAnimateBg"

export const DrawerNavHeader = () => {
  const {scope} = useAnimateBg()
  
  return (
    <DrawerHeader ref={scope} className="flex flex-col bg-primary gap-4 p-4">
      <Avatar className="w-20 h-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col space-y-1">
        <DrawerTitle className="text-white font-fredoka text-lg">
          Gustavo Aguiar
        </DrawerTitle>
        <p className="text-green-400 text-xs font-semibold">1125 xp</p>
      </div>
    </DrawerHeader>
  )
}
