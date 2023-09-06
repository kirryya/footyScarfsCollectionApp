import * as React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '../common/Error-page';
import { Paths } from '../enums';

import Home from './home/Home';
import { Login } from './login/Login';
import { Registration } from './registration';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: Paths.LOGIN, element: <Login /> },
  { path: Paths.REGISTRATION, element: <Registration /> },
]);
