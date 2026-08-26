import { Navigate, Outlet } from 'react-router-dom';
import { useUserProvider } from '@/providers/UserProvider';

export const RequireAuth = () => {
  const { user } = useUserProvider();
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};
