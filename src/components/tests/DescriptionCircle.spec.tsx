import { render, screen } from '@testing-library/react';
import { DescriptionCircle } from '@/components/DescriptionCircle';

describe('DescriptionCircle', () => {
  it('mostra os textos da esquerda e da direita', () => {
    render(<DescriptionCircle left="3 atividades" right="12 XP" />);

    expect(screen.getByText('3 atividades')).toBeInTheDocument();
    expect(screen.getByText('12 XP')).toBeInTheDocument();
  });
});
