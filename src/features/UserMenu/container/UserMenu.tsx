import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserMenuItem } from '../components/UserMenuItem';
import { UserMenuHeader } from '../components/UserMenuHeader';
import Espadas from '@/assets/Espadas.jpg';

const menuItems = [
  { label: 'Medalhas', to: '/medalhas' },
  { label: 'Editar', to: '/' },
];

type UserMenuPropsType = {
  onLogout: () => void;
};

export const UserMenu = ({ onLogout }: UserMenuPropsType) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="hidden sm:flex py-2 gap-2 font-montserrat items-center outline-none">
      <p>Olá, Gustavo</p>
      <ChevronDown size={16} />
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" className="min-w-44 p-0">
      <UserMenuHeader imageSrc={Espadas} xp={1125} fallback="GA" />
      <div className="p-1">
        {menuItems.map((item) => (
          <UserMenuItem key={item.label} {...item} />
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          className="font-montserrat"
          onClick={onLogout}
        >
          Sair
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);
