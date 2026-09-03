import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatHeader } from '../components/ChatHeader';

jest.mock('@/components/ui/drawer', () => ({
  DrawerHeader: ({ children }: { children: unknown }) => (
    <header>{children}</header>
  ),
  DrawerTitle: ({ children }: { children: unknown }) => <h2>{children}</h2>,
  DrawerDescription: ({ children }: { children: unknown }) => <p>{children}</p>,
  DrawerClose: ({ children }: { children: unknown }) => children,
}));

describe('ChatHeader', () => {
  it('shows the title and hides clear when there are no messages', () => {
    render(<ChatHeader onClear={jest.fn()} messagesLength={0} />);

    expect(screen.getByText('Gerador de atividades')).toBeInTheDocument();
    expect(
      screen.getByText('Crie atividades rapidamente usando IA')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument();
    expect(screen.queryByTitle('Limpar conversa')).not.toBeInTheDocument();
  });

  it('clears the conversation when there are messages', async () => {
    const user = userEvent.setup();
    const onClear = jest.fn();

    render(<ChatHeader onClear={onClear} messagesLength={2} />);

    await user.click(screen.getByTitle('Limpar conversa'));

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
