import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserMenuHeaderPropsType = {
  imageSrc: string;
  xp: number;
  fallback: string;
};

export const UserMenuHeader = ({
  imageSrc,
  xp,
  fallback,
}: UserMenuHeaderPropsType) => (
  <div className="flex flex-col items-center gap-2 bg-primary p-4">
    <Avatar className="size-20">
      <AvatarImage src={imageSrc} alt="Foto de perfil" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
    <p className="text-green-400 text-xs font-semibold">{xp} xp</p>
  </div>
);
