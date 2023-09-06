import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from 'types';

export const Login = (): ReturnComponentType => {
  return (
    <div>
      <span>Login</span>
      <NavLink to="/">Back</NavLink>
    </div>
  );
};
