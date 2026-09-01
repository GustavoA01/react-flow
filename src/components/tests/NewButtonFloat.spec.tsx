import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewButtonFloat } from '@/components/NewButtonFloat';

describe('NewButtonFloat', () => {
  it('shows the text and fires the click', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<NewButtonFloat text="Nova Atividade" onClick={onClick} />);

    expect(screen.getByText('Nova Atividade')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /nova atividade/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
