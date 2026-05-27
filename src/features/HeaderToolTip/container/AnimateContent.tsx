import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAnimateBg } from '@/hooks/useAnimateBg';
import { LogOut } from 'lucide-react';
import Espadas from '@/assets/Espadas.jpg';
import { ToolTipItem } from '../components/ToolTipItem';

const temporaryItens = [
  { label: 'Notificações', to: '/medalhas', title: 'Ver notificações' },
  { label: 'Minha conta', to: '/medalhas', title: 'Acessar conta' },
  { label: 'Medalhas', to: '/medalhas', title: 'Ver medalhas' },
];

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
          <AvatarImage src={Espadas} alt="avatar-img" />
          <AvatarFallback>GA</AvatarFallback>
        </Avatar>
        <p className="text-green-400 text-xs font-semibold">1125 xp</p>

        <Button
          variant="ghost"
          onClick={setOpenDialog}
          className="space-x-1 hover:text-white font-montserrat hover:bg-primary-dark/50 transition-all ease-in"
        >
          <LogOut />
          <p>Sair</p>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {temporaryItens.map((item) => (
          <ToolTipItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
