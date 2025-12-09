import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAnimateBg } from "@/hooks/useAnimateBg";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export const AnimateContent = ({
  setOpenDialog,
}: {
  setOpenDialog: () => void;
}) => {
  const { scope } = useAnimateBg();

  return (
    <div className="flex space-x-6 rounded-md p-4" ref={scope}>
      <div className="flex flex-col items-center gap-2">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-green-400 text-xs font-semibold">1125 xp</p>

        <Button
          onClick={setOpenDialog}
          variant="ghost"
          className="space-x-1 hover:text-white font-montserrat hover:bg-primary-dark/50 transition-all ease-in"
        >
          <LogOut />
          <p>Sair</p>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="ghost"
          className="hover:text-white font-montserrat hover:bg-primary-dark/50 transition-all ease-in"
        >
          <Link to="/medalhas">Notificações</Link>
        </Button>
        <Button
          variant="ghost"
          className="hover:text-white font-montserrat hover:bg-primary-dark/50 transition-all ease-in"
        >
          <Link to="/medalhas">Minha conta</Link>
        </Button>
        {[...Array(4)].map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            className="hover:text-white font-montserrat hover:bg-primary-dark/50 transition-all ease-in"
          >
            <Link to="/medalhas">Medalhas</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
