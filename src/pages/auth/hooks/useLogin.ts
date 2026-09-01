import {
  loginSchema,
  type LoginFormType,
  type LoginRoleType,
} from '@/data/schemas/auth';
import { findMonitorByCredentials } from '@/data/temporaryMocks/monitores';
import { findAlunoByCredentials } from '@/data/temporaryMocks/usuario';
import { useUserProvider } from '@/providers/UserProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { setUser } = useUserProvider();
  const navigate = useNavigate();
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      tipo: 'ALUNO',
      apelido: '',
      email: '',
      senha: '',
    },
  });

  const tipo = methods.watch('tipo');
  const isAluno = tipo === 'ALUNO';

  const enterAs = (nextTipo: LoginRoleType) => {
    methods.setValue('tipo', nextTipo);
    methods.clearErrors(['apelido', 'email', 'senha']);
  };

  const handleRole = {
    ALUNO: (data: LoginFormType) => {
      const aluno = findAlunoByCredentials(data.apelido, data.senha);
      if (!aluno) {
        methods.setError('root', {
          message: 'Apelido ou senha inválidos',
        });
        return;
      }
      setUser(aluno);
      navigate('/', { replace: true });
    },
    MONITOR: (data: LoginFormType) => {
      const monitor = findMonitorByCredentials(data.email, data.senha);
      if (!monitor) {
        methods.setError('root', {
          message: 'E-mail ou senha inválidos',
        });
        return;
      }
      setUser(monitor);
      navigate('/cursos', { replace: true });
    },
  };

  const onSubmit = methods.handleSubmit((data: LoginFormType) => {
    handleRole[data.tipo](data);
  });

  return {
    onSubmit,
    register: methods.register,
    errors: methods.formState.errors,
    isAluno,
    enterAsStudent: () => enterAs('ALUNO'),
    enterAsMonitor: () => enterAs('MONITOR'),
  };
};
