import { screen } from '@testing-library/react';
import { HeaderDesktopNav } from '@/components/Header/HeaderDesktopNav';
import { mockLoggedMonitor } from '@/data/temporaryMocks/monitores';
import { renderWithProviders } from './renderWithProviders';

describe('HeaderDesktopNav', () => {
  it('shows the monitor header items', () => {
    renderWithProviders(<HeaderDesktopNav onLogout={jest.fn()} />, {
      route: '/cursos',
      user: mockLoggedMonitor,
    });

    expect(screen.getByRole('link', { name: 'Cursos' })).toHaveAttribute(
      'href',
      '/cursos'
    );
    expect(screen.getByRole('link', { name: 'Mapa' })).toHaveAttribute(
      'href',
      '/mapa'
    );
    expect(screen.getByRole('link', { name: 'Medalhas' })).toHaveAttribute(
      'href',
      '/medalhas'
    );
  });
});
