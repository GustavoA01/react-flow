import { screen } from '@testing-library/react';
import { Header } from '@/components/Header/Header';
import { renderWithProviders } from './renderWithProviders';

jest.mock('@/assets/logo-menu.png', () => 'logo.png');

describe('Header', () => {
  it('mostra o nome do app e o logo', () => {
    renderWithProviders(<Header />);

    expect(screen.getByText('Beira Linha Play')).toBeInTheDocument();
    expect(screen.getByAltText('Beira Linha Play')).toBeInTheDocument();
  });
});
