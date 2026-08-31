import { screen } from '@testing-library/react';
import { ResourceNotFound } from '@/components/ResourceNotFound';
import { renderWithProviders } from './renderWithProviders';

describe('ResourceNotFound', () => {
  it('mostra o label informado', () => {
    renderWithProviders(<ResourceNotFound label="Curso não encontrado" />);

    expect(screen.getByText('Curso não encontrado')).toBeInTheDocument();
  });
});
