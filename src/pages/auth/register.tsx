import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import logoMenu from '@/assets/logo-menu.png';
import { Link } from 'react-router-dom';
import { EnterAsButtons } from './components/EnterAsButtons';
import { useRegister } from './hooks/useRegister';
import { FormContent } from './components/FormContent';

export const RegisterPage = () => {
  const {
    register,
    onSubmit,
    errors,
    isAluno,
    enterAsStudent,
    enterAsMonitor,
  } = useRegister();

  return (
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
            Cadastre-se
          </h1>
          <CardDescription className="font-montserrat">
            {isAluno
              ? 'Crie sua conta para começar a jogar.'
              : 'Crie sua conta de monitor para gerenciar as turmas.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <EnterAsButtons
            isAluno={isAluno}
            onEnterAsStudent={enterAsStudent}
            onEnterAsMonitor={enterAsMonitor}
          />
          <FormContent
            onSubmit={onSubmit}
            errors={errors}
            register={register}
            isAluno={isAluno}
          />
          <p className="text-center text-sm text-muted-foreground font-montserrat">
            Já tem uma conta?{' '}
            <Link
              to="/login"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              Entrar
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
