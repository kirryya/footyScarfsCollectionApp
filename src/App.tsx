import { Suspense } from 'react';

import { RouterProvider } from 'react-router-dom';

import { Loading } from '@/common';
import { router } from '@/pages/router-config.tsx';
import { ReturnComponentType } from '@/types';

const App = (): ReturnComponentType => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
