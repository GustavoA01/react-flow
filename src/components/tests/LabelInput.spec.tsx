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
  it('associates the label with the input', () => {
    render(<Harness />);

    expect(screen.getByLabelText('Nome')).toHaveAttribute('id', 'nome');
  });

  it('shows the error message when present', () => {
    render(<Harness error="Informe o nome do curso" />);

    expect(screen.getByText('Informe o nome do curso')).toBeInTheDocument();
  });
});
