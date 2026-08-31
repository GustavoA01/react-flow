import { screen } from '@testing-library/react';
import { CourseSharedHeader } from '@/components/Header/CourseSharedHeader';
import { renderWithProviders } from './renderWithProviders';

describe('CourseSharedHeader', () => {
  it('mostra o voltar', () => {
    renderWithProviders(<CourseSharedHeader />);

    expect(screen.getByText('Voltar')).toBeInTheDocument();
  });
});
