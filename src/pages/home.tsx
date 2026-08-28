import { Navigate } from 'react-router-dom';
import { Map } from './mapa';
import { useAuthUser } from '@/providers/UserProvider';

export const Home = () => {
  const { isMonitor, isAdmin } = useAuthUser();
  if (isMonitor || isAdmin) return <Navigate to="/cursos" replace />;
  return <Map />;
};
