import { RouterProvider } from 'react-router-dom';
import { Router } from './router';
import { UserProvider } from '@/providers/UserProvider';
import { Toaster } from '@/components/ui/toast';

const App = () => (
  <UserProvider>
    <RouterProvider router={Router} />
    <Toaster />
  </UserProvider>
);

export default App;
