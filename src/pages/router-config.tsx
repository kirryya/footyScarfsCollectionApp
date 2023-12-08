import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '@/common';
import { routes } from '@/const';
import { Home, Login, SignUp, Main } from '@/pages';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: routes.LOGIN, element: <Login /> },
  { path: routes.REGISTRATION, element: <SignUp /> },
  { path: routes.MAIN, element: <Main /> },
]);
