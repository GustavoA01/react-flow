import { render, screen } from '@testing-library/react';
import { ErrorFormMessage } from '@/components/ErrorFormMessage';

describe('ErrorFormMessage', () => {
  it('mostra a mensagem de erro', () => {
    render(<ErrorFormMessage message="Informe o nome do curso" />);

    expect(screen.getByText('Informe o nome do curso')).toBeInTheDocument();
  });
});
