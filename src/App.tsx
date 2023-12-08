import './App.css';

import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages/router-config.tsx';
import { ReturnComponentType } from '@/types';

const App = (): ReturnComponentType => {
  return <RouterProvider router={router} />;
};

export default App;
