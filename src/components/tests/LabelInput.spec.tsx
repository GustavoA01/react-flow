import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { LabelInput } from '@/components/LabelInput';

type FormType = { nome: string };

const Harness = ({ error }: { error?: string }) => {
  const { register } = useForm<FormType>({ defaultValues: { nome: '' } });

  return (
    <LabelInput
      label="Nome"
      id="nome"
      register={register}
      error={error}
      placeholder="Ex.: Cálculo I"
    />
  );
};

describe('LabelInput', () => {
  it('liga o label ao input', () => {
    render(<Harness />);

    expect(screen.getByLabelText('Nome')).toHaveAttribute('id', 'nome');
  });

  it('mostra a mensagem de erro quando houver', () => {
    render(<Harness error="Informe o nome do curso" />);

    expect(screen.getByText('Informe o nome do curso')).toBeInTheDocument();
  });
});
