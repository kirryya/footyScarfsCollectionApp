import { useRouteError } from 'react-router-dom';

import { ReturnComponentType } from 'types';

export const ErrorPage = (): ReturnComponentType => {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
