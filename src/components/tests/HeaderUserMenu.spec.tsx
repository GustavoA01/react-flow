import { screen } from '@testing-library/react';
import { HeaderUserMenu } from '@/components/Header/HeaderUserMenu';
import { mockLoggedMonitor } from '@/data/temporaryMocks/monitores';
import { renderWithProviders } from './renderWithProviders';

describe('HeaderUserMenu', () => {
  it('greets the monitor by institutional name', () => {
    renderWithProviders(<HeaderUserMenu onLogout={jest.fn()} />, {
      user: mockLoggedMonitor,
    });

    expect(screen.getByText('Olá, Maria Souza')).toBeInTheDocument();
  });
});
