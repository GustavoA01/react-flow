import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RequireAuth } from '@/components/layouts/RequireAuth';
import { useUserProvider } from '@/providers/UserProvider';

jest.mock('@/providers/UserProvider', () => ({
  useUserProvider: jest.fn(),
}));

const mockedUseUserProvider = useUserProvider as jest.MockedFunction<
  typeof useUserProvider
>;

const renderGuard = () =>
  render(
    <MemoryRouter initialEntries={['/cursos']}>
      <Routes>
        <Route path="/login" element={<p>Login</p>} />
        <Route element={<RequireAuth />}>
          <Route path="/cursos" element={<p>Privado</p>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

describe('RequireAuth', () => {
  it('redireciona para login sem usuário', () => {
    mockedUseUserProvider.mockReturnValue({
      user: null,
      setUser: jest.fn(),
      isAluno: false,
      isMonitor: false,
      isAdmin: false,
    });

    renderGuard();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('libera a rota quando há usuário', () => {
    mockedUseUserProvider.mockReturnValue({
      user: {
        id: 'monitor-1',
        nome: 'Maria Souza',
        senha: '123456',
        tipo: 'MONITOR',
        cursoIds: ['curso-calculo-1'],
      },
      setUser: jest.fn(),
      isAluno: false,
      isMonitor: true,
      isAdmin: false,
    });

    renderGuard();
    expect(screen.getByText('Privado')).toBeInTheDocument();
  });
});
