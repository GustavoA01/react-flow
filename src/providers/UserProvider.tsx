import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Aluno, Monitor, Usuario } from '@/data/types/api';
import { mockLoggedUser } from '@/data/temporaryMocks/usuario';

type SetUserType = (user: Usuario | null) => void;

type UserContextType =
  | { user: Aluno; setUser: SetUserType; isAluno: true; isMonitor: false }
  | { user: Monitor; setUser: SetUserType; isAluno: false; isMonitor: true }
  | { user: null; setUser: SetUserType; isAluno: false; isMonitor: false };

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Usuario | null>(mockLoggedUser);

  const value = useMemo((): UserContextType => {
    if (user?.tipo === 'ALUNO') {
      return { user, setUser, isAluno: true, isMonitor: false };
    }
    if (user?.tipo === 'MONITOR') {
      return { user, setUser, isAluno: false, isMonitor: true };
    }
    return { user: null, setUser, isAluno: false, isMonitor: false };
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserProvider = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserProvider precisa estar dentro de UserProvider');
  }
  return context;
};

export const useAuthUser = () => {
  const context = useUserProvider();
  if (!context.user) {
    throw new Error('useAuthUser precisa estar dentro de RequireAuth');
  }
  return context;
};
