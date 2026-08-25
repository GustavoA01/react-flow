import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { headerItems } from '@/data/constants';
import Espadas from '@/assets/Espadas.jpg';
import { cn } from '@/lib/utils';

type HeaderDesktopNavPropsType = {
  onLogout: () => void;
};

const navLinkClass = (isActive?: boolean) =>
  cn(
    buttonVariants({ variant: 'ghost' }),
    'text-md font-montserrat hover:text-white hover:bg-primary-dark/50 transition-all ease-in',
    isActive ? 'text-white' : 'text-zinc-300'
  );

export const HeaderDesktopNav = ({ onLogout }: HeaderDesktopNavPropsType) => {
  const { pathname } = useLocation();

  return (
    <div className="hidden sm:flex items-center gap-2">
      {headerItems.map(({ name, path }) => (
        <Link
          key={name + path}
          to={path}
          className={navLinkClass(pathname === path)}
        >
          {name}
        </Link>
      ))}

      <div className="flex items-center gap-2 border-l border-white/20 pl-4 ml-2">
        <Avatar className="size-8">
          <AvatarImage src={Espadas} alt="Foto de perfil" />
          <AvatarFallback>GA</AvatarFallback>
        </Avatar>
        <p className="font-montserrat mr-1">Olá, Gustavo</p>
        <Link to="/" className={navLinkClass()}>
          Editar
        </Link>
        <Button
          variant="ghost"
          onClick={onLogout}
          className="text-md font-montserrat hover:text-white hover:bg-primary-dark/50 transition-all ease-in text-zinc-300"
        >
          Sair
        </Button>
      </div>
    </div>
  );
};
