import { Navigate } from 'react-router-dom';
import { Map } from './mapa';
import { useAuthUser } from '@/providers/UserProvider';

export const Home = () => {
  const { isMonitor } = useAuthUser();
  if (isMonitor) return <Navigate to="/cursos" replace />;
  return <Map />;
};
