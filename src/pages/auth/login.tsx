import { ErrorFormMessage } from '@/components/ErrorFormMessage';
import { Button } from '@/components/ui/button';
import { AuthFields } from './components/AuthFields';
import { AuthLayout } from './components/AuthLayout';
import { AuthFooterLink } from './components/AuthFooterLink';
import { useLogin } from './hooks/useLogin';

export const LoginPage = () => {
  const {
    register,
    onSubmit,
    errors,
    isAluno,
    enterAsStudent,
    enterAsMonitor,
  } = useLogin();

  return (
    <AuthLayout
      title="Entrar"
      isAluno={isAluno}
      onEnterAsStudent={enterAsStudent}
      onEnterAsMonitor={enterAsMonitor}
      description={
        isAluno
          ? 'Entre para continuar jogando.'
          : 'Entre para gerenciar as turmas.'
      }
      footer={
        <AuthFooterLink
          prompt="Não tem uma conta?"
          to="/cadastro"
          label="Cadastre-se"
        />
      }
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <AuthFields
          autoFocus
          errors={errors}
          isAluno={isAluno}
          register={register}
        />
        {errors.root?.message && (
          <ErrorFormMessage message={errors.root.message} />
        )}
        <Button type="submit" className="w-full font-montserrat">
          Entrar
        </Button>
      </form>
    </AuthLayout>
  );
};
