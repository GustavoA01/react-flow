import { render, screen } from '@testing-library/react';
import { UnknownMedal } from '../components/UnknownMedal';

describe('UnknownMedal', () => {
  it('shows the minimum points of an unearned medal', () => {
    render(<UnknownMedal minPoints={20} />);

    expect(screen.getByText('20 xp')).toBeInTheDocument();
  });
});
