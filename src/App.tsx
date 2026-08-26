import { RouterProvider } from 'react-router-dom';
import { Router } from './router';
import { UserProvider } from '@/providers/UserProvider';

const App = () => (
  <UserProvider>
    <RouterProvider router={Router} />
  </UserProvider>
);

export default App;
