import { Suspense } from 'react';

import './App.css';

import { NavLink } from 'react-router-dom';

import { Loading } from './common';
import { Paths } from './enums';

import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  return (
    <Suspense fallback={<Loading />}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>My footy scarfs</span>
        <NavLink to={Paths.LOGIN}> LOGIN </NavLink>
      </div>
    </Suspense>
  );
};

export default App;
