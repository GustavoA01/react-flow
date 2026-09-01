import { LabelInput } from '@/components/LabelInput';
import { Button } from '@/components/ui/button';
import type { RegisterFormType } from '@/data/schemas/auth';
import type { FormEventHandler } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormContentPropsType = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<RegisterFormType>;
  register: UseFormRegister<RegisterFormType>;
  isAluno: boolean;
};

export const FormContent = ({
  onSubmit,
  errors,
  register,
  isAluno,
}: FormContentPropsType) => (
  <form className="space-y-4" onSubmit={onSubmit}>
    <LabelInput
      label="Nome"
      id="nome"
      autoFocus
      autoComplete="name"
      placeholder="Ex.: Gustavo Aguiar"
      error={errors.nome?.message}
      register={register}
    />
    {isAluno ? (
      <LabelInput
        label="Apelido"
        id="apelido"
        autoComplete="nickname"
        placeholder="Ex.: Gu"
        error={errors.apelido?.message}
        register={register}
      />
    ) : (
      <LabelInput
        label="E-mail"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="Ex.: maria@pucminas.br"
        error={errors.email?.message}
        register={register}
      />
    )}
    <LabelInput
      label="Senha"
      id="senha"
      type="password"
      autoComplete="new-password"
      error={errors.senha?.message}
      register={register}
    />
    <LabelInput
      label="Confirmar senha"
      id="confirmarSenha"
      type="password"
      autoComplete="new-password"
      error={errors.confirmarSenha?.message}
      register={register}
    />
    <Button type="submit" className="w-full font-montserrat">
      Cadastrar
    </Button>
  </form>
);
