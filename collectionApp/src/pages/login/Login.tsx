import { NavLink } from 'react-router-dom';

import { Paths } from '../../enums';

import { ReturnComponentType } from 'types';

export const Login = (): ReturnComponentType => {
  return (
    <div>
      <span>Login</span>
      <NavLink to={Paths.HOME}>Back</NavLink>
    </div>
  );
};
