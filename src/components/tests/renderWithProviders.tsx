import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '@/providers/UserProvider';

export const renderWithProviders = (
  ui: ReactElement,
  { route = '/' }: { route?: string } = {}
) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <UserProvider>{ui}</UserProvider>
    </MemoryRouter>
  );
