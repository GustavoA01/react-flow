import { screen } from '@testing-library/react';
import { ResourceNotFound } from '@/components/ResourceNotFound';
import { renderWithProviders } from './renderWithProviders';

describe('ResourceNotFound', () => {
  it('shows the given label', () => {
    renderWithProviders(<ResourceNotFound label="Curso não encontrado" />);

    expect(screen.getByText('Curso não encontrado')).toBeInTheDocument();
  });
});
