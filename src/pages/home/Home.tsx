import { Suspense } from 'react';

import { Link } from 'react-router-dom';

// @ts-ignore
import s from './home.module.scss';

import { Loading } from '@/common';
import { routes } from '@/const';
import { ReturnComponentType } from '@/types';

export const Home = (): ReturnComponentType => {
  return (
    <div className={s.home}>
      <Suspense fallback={<Loading />}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>My footy scarfs</span>
          <Link to={routes.LOGIN}> LOGIN </Link>
          <div>
            <span>
              If you did not account yet, please register <Link to={routes.REGISTRATION}> here </Link>
            </span>
          </div>
        </div>
      </Suspense>
    </div>
  );
};
