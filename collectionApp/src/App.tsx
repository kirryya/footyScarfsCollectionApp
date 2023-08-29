import { Suspense } from 'react';

import './App.css';

import { Loading } from './common';

import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  return <Suspense fallback={<Loading />}>My footy scarfs</Suspense>;
};

export default App;
