import * as React from 'react';

import './App.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './pages/router-config';

import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
