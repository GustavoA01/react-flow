import { Link } from 'react-router-dom';
import { ChevronDown, LogOut, Pencil } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Espadas from '@/assets/Espadas.jpg';

type HeaderUserMenuPropsType = {
  onLogout: () => void;
};

export const HeaderUserMenu = ({ onLogout }: HeaderUserMenuPropsType) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="group flex items-center gap-2 rounded-md py-1 pl-1 pr-2 outline-none font-montserrat hover:bg-primary-dark/50 transition-all ease-in">
      <Avatar className="size-8">
        <AvatarImage src={Espadas} alt="Foto de perfil" />
        <AvatarFallback>GA</AvatarFallback>
      </Avatar>
      <p>Olá, Gustavo</p>
      <ChevronDown
        size={16}
        className="transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" className="min-w-40">
      <DropdownMenuItem asChild>
        <Link to="/" className="font-montserrat">
          <Pencil size={16} />
          Editar
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={onLogout}
        variant="destructive"
        className="font-montserrat"
      >
        <Link to="/login" className="font-montserrat">
          <LogOut size={16} />
          Sair
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
