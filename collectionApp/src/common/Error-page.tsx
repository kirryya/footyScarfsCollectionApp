import { useRouteError } from 'react-router-dom';

import { ReturnComponentType } from '@/types';

export const ErrorPage = (): ReturnComponentType => {
  // @ts-ignore
  const { statusText, message } = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};
