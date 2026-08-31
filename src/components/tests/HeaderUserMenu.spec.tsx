import { screen } from '@testing-library/react';
import { HeaderUserMenu } from '@/components/Header/HeaderUserMenu';
import { renderWithProviders } from './renderWithProviders';

describe('HeaderUserMenu', () => {
  it('cumprimenta o monitor pelo nome institucional', () => {
    renderWithProviders(<HeaderUserMenu onLogout={jest.fn()} />);

    expect(screen.getByText('Olá, Maria Souza')).toBeInTheDocument();
  });
});
