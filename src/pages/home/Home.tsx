import { Link } from 'react-router-dom';

import s from './home.module.scss';

import { routes } from '@/const';
import { ReturnComponentType } from '@/types';

export const Home = (): ReturnComponentType => {
  return (
    <div className={s.home}>
      <div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <span>My footy scarfs</span>
          <Link to={routes.LOGIN}> LOGIN </Link>
        </div>
        <div>
          <span>
            If you did not account yet, please register <Link to={routes.REGISTRATION}> here </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
