import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GoBack } from '@/components/GoBack';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('GoBack', () => {
  it('goes back one page in history', async () => {
    const user = userEvent.setup();
    render(<GoBack />);

    await user.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
