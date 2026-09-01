import { screen } from '@testing-library/react';
import { CourseSharedHeader } from '@/components/Header/CourseSharedHeader';
import { renderWithProviders } from './renderWithProviders';

describe('CourseSharedHeader', () => {
  it('shows the back control', () => {
    renderWithProviders(<CourseSharedHeader />);

    expect(screen.getByText('Voltar')).toBeInTheDocument();
  });
});
