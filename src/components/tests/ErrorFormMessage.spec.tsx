import { render, screen } from '@testing-library/react';
import { ErrorFormMessage } from '@/components/ErrorFormMessage';

describe('ErrorFormMessage', () => {
  it('shows the error message', () => {
    render(<ErrorFormMessage message="Informe o nome do curso" />);

    expect(screen.getByText('Informe o nome do curso')).toBeInTheDocument();
  });
});
