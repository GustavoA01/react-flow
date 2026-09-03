import { render, screen } from '@testing-library/react';
import { BarProgress } from '../components/ProgressModal/BarProgress';

describe('BarProgress', () => {
  it('shows accumulated points and percentage', () => {
    render(<BarProgress points={40} minPoints={100} progress={40} />);

    expect(screen.getByText('40')).toBeInTheDocument();
    expect(screen.getByText(/de 100/)).toBeInTheDocument();
    expect(screen.getByText('40%')).toBeInTheDocument();
  });

  it('shows 100% when the bar is full', () => {
    render(<BarProgress points={80} minPoints={80} progress={100} />);

    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
    expect(screen.getByText(/de 80/)).toBeInTheDocument();
  });
});
