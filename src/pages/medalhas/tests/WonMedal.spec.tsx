import { fireEvent, render, screen } from '@testing-library/react';
import { WonMedal } from '../components/WonMedal';

describe('WonMedal', () => {
  it('shows the earned medal', () => {
    render(
      <WonMedal open={false} onOpenChange={jest.fn()} onDelete={jest.fn()} />
    );

    expect(screen.getByAltText('Imagem medalha')).toBeInTheDocument();
    expect(screen.getByText('PUC Minas')).toBeInTheDocument();
    expect(screen.getByText('20 xp')).toBeInTheDocument();
  });

  it('calls onDelete when deleting from the menu', () => {
    const onDelete = jest.fn();

    render(<WonMedal open onOpenChange={jest.fn()} onDelete={onDelete} />);

    fireEvent.click(screen.getByRole('menuitem', { name: 'Excluir' }));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
