import {
  registerSchema,
  type RegisterFormType,
  type RegisterRoleType,
} from '@/data/schemas/auth';
import type { AlunoType, MonitorType } from '@/data/types/api';
import { useUserProvider } from '@/providers/UserProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const newUserId = (prefix: string) =>
  globalThis.crypto?.randomUUID?.() ?? `${prefix}-${Date.now()}`;

export const useRegister = () => {
  const { setUser } = useUserProvider();
  const navigate = useNavigate();
  const methods = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      tipo: 'ALUNO',
      nome: '',
      apelido: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    },
  });

  const tipo = methods.watch('tipo');
  const isAluno = tipo === 'ALUNO';

  const enterAs = (nextTipo: RegisterRoleType) => {
    methods.setValue('tipo', nextTipo);
    methods.clearErrors(['apelido', 'email']);
  };

  const handleRole = {
    ALUNO: (data: RegisterFormType) => {
      const aluno: AlunoType = {
        id: newUserId('aluno'),
        nome: data.nome,
        apelido: data.apelido,
        senha: data.senha,
        tipo: 'ALUNO',
        pontos: 0,
        imagemPerfil: '',
        cursoIds: [],
      };
      setUser(aluno);
      navigate('/', { replace: true });
    },
    MONITOR: (data: RegisterFormType) => {
      const monitor: MonitorType = {
        id: newUserId('monitor'),
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        tipo: 'MONITOR',
        cursoIds: [],
      };
      setUser(monitor);
      navigate('/cursos', { replace: true });
    },
  };

  const onSubmit = methods.handleSubmit((data: RegisterFormType) => {
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
