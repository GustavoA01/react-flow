import { screen } from '@testing-library/react';
import { BottomNavigation } from '@/components/BottomNavigation';
import { mockLoggedMonitor } from '@/data/temporaryMocks/monitores';
import { renderWithProviders } from './renderWithProviders';

describe('BottomNavigation', () => {
  it('renders the monitor shortcuts', () => {
    renderWithProviders(<BottomNavigation />, {
      route: '/cursos',
      user: mockLoggedMonitor,
    });

    const hrefs = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'));
    expect(hrefs).toEqual(['/cursos', '/mapa', '/rankings']);
  });
});
