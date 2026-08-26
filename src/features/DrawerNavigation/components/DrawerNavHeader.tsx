import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useAnimateBg } from '@/hooks/useAnimateBg';
import { useAuthUser } from '@/providers/UserProvider';

export const DrawerNavHeader = () => {
  const scope = useAnimateBg();
  const { user, isAluno } = useAuthUser();
  const title = isAluno ? user.apelido : user.nome;
  const subtitle = user.nome;
  const points = isAluno ? user.pontos : null;
  const initials = subtitle
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <DrawerHeader ref={scope} className="flex flex-col bg-primary gap-4 p-4">
      <Avatar className="w-20 h-20">
        <AvatarImage
          src={isAluno ? user.imagemPerfil : ''}
          alt="Foto de perfil"
        />
        <AvatarFallback>{initials || '?'}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col space-y-1">
        <DrawerTitle className="text-white font-fredoka text-lg">
          {title}
        </DrawerTitle>
        {isAluno && (
          <DrawerDescription className="text-muted-foreground text-sm">
            {subtitle}
          </DrawerDescription>
        )}
        {points !== null && (
          <p className="text-green-400 text-xs font-semibold">{points} xp</p>
        )}
      </div>
    </DrawerHeader>
  );
};
