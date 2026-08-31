import { screen } from '@testing-library/react';
import { BottomNavigation } from '@/components/BottomNavigation';
import { renderWithProviders } from './renderWithProviders';

describe('BottomNavigation', () => {
  it('monta os atalhos do monitor', () => {
    renderWithProviders(<BottomNavigation />, { route: '/cursos' });

    const hrefs = screen.getAllByRole('link').map((link) => link.getAttribute('href'));
    expect(hrefs).toEqual(['/cursos', '/mapa', '/rankings']);
  });
});
