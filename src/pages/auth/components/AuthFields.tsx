import { LabelInput } from '@/components/LabelInput';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type AuthFieldsValues = {
  apelido: string;
  email: string;
  senha: string;
};

type AuthFieldError = { message?: string };

type AuthFieldsPropsType<T extends FieldValues & AuthFieldsValues> = {
  isAluno: boolean;
  errors: {
    apelido?: AuthFieldError;
    email?: AuthFieldError;
    senha?: AuthFieldError;
  };
  register: UseFormRegister<T>;
  autoFocus?: boolean;
  passwordAutoComplete?: 'current-password' | 'new-password';
};

export const AuthFields = <T extends FieldValues & AuthFieldsValues>({
  isAluno,
  errors,
  register,
  autoFocus = false,
  passwordAutoComplete = 'current-password',
}: AuthFieldsPropsType<T>) => (
  <>
    {isAluno ? (
      <LabelInput
        label="Apelido"
        id={'apelido' as Path<T>}
        autoFocus={autoFocus}
        autoComplete="nickname"
        placeholder="Ex.: Gu"
        error={errors.apelido?.message}
        register={register}
      />
    ) : (
      <LabelInput
        label="E-mail"
        id={'email' as Path<T>}
        type="email"
        autoFocus={autoFocus}
        autoComplete="email"
        placeholder="Ex.: maria@pucminas.br"
        error={errors.email?.message}
        register={register}
      />
    )}
    <LabelInput
      label="Senha"
      id={'senha' as Path<T>}
      type="password"
      autoComplete={passwordAutoComplete}
      error={errors.senha?.message}
      register={register}
    />
  </>
);
