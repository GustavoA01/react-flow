import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LogoutDialog } from '@/components/LogoutDialog';

describe('LogoutDialog', () => {
  it('shows the dialog when open', () => {
    render(<LogoutDialog openDialog setOpenDialog={jest.fn()} />);

    expect(
      screen.getByText('Deseja mesmo sair da sua conta?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Você será redirecionado para a tela de login.')
    ).toBeInTheDocument();
  });

  it('closes when cancelled', async () => {
    const user = userEvent.setup();
    const setOpenDialog = jest.fn();

    render(<LogoutDialog openDialog setOpenDialog={setOpenDialog} />);

    await user.click(screen.getByRole('button', { name: 'Cancelar' }));
    expect(setOpenDialog).toHaveBeenCalledWith(false);
  });
});
