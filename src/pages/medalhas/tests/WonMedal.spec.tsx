import { fireEvent, render, screen } from '@testing-library/react';
import { WonMedal } from '../components/WonMedal';

describe('WonMedal', () => {
  it('mostra a medalha conquistada', () => {
    render(
      <WonMedal open={false} onOpenChange={jest.fn()} onDelete={jest.fn()} />
    );

    expect(screen.getByAltText('Imagem medalha')).toBeInTheDocument();
    expect(screen.getByText('PUC Minas')).toBeInTheDocument();
    expect(screen.getByText('20 xp')).toBeInTheDocument();
  });

  it('chama onDelete ao excluir pelo menu', () => {
    const onDelete = jest.fn();

    render(<WonMedal open onOpenChange={jest.fn()} onDelete={onDelete} />);

    fireEvent.click(screen.getByRole('menuitem', { name: 'Excluir' }));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
