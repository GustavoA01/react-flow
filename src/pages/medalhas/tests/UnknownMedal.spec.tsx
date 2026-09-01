import { render, screen } from '@testing-library/react';
import { UnknownMedal } from '../components/UnknownMedal';

describe('UnknownMedal', () => {
  it('mostra os pontos mínimos da medalha ainda não conquistada', () => {
    render(<UnknownMedal minPoints={20} />);

    expect(screen.getByText('20 xp')).toBeInTheDocument();
  });
});
