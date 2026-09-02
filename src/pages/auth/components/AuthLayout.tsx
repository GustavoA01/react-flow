import type { ReactNode } from 'react';
import logoMenu from '@/assets/logo-menu.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { EnterAsButtons } from './EnterAsButtons';

type AuthLayoutPropsType = {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
  isAluno?: boolean;
  onEnterAsStudent?: () => void;
  onEnterAsMonitor?: () => void;
};

export const AuthLayout = ({
  title,
  description,
  isAluno,
  onEnterAsStudent,
  onEnterAsMonitor,
  children,
  footer,
}: AuthLayoutPropsType) => (
  <div className="flex min-h-dvh items-center justify-center bg-primary px-4 py-8">
    <Card className="w-full max-w-md">
      <CardHeader className="items-center text-center">
        <div className="mb-2 h-12 w-24 overflow-hidden rounded-md bg-white">
          <img
            src={logoMenu}
            alt="Beira Linha Play"
            className="size-full object-contain"
          />
        </div>
        <h1 className="font-fredoka text-2xl font-semibold text-primary-dark">
          {title}
        </h1>
        <CardDescription className="font-montserrat">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {onEnterAsStudent && onEnterAsMonitor && (
          <EnterAsButtons
            isAluno={Boolean(isAluno)}
            onEnterAsStudent={onEnterAsStudent}
            onEnterAsMonitor={onEnterAsMonitor}
          />
        )}
        {children}
        {footer && (
          <p className="text-center text-sm text-muted-foreground font-montserrat">
            {footer}
          </p>
        )}
      </CardContent>
    </Card>
  </div>
);
