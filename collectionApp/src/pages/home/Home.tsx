import { Suspense } from 'react';

import { Link } from 'react-router-dom';

import { Loading } from '../../common';
import { Paths } from '../../enums';

import { ReturnComponentType } from 'types';

const Home = (): ReturnComponentType => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>My footy scarfs</span>
          <Link to={Paths.LOGIN}> LOGIN </Link>
          <div>
            <span>
              If you did not account yet, please register <Link to={Paths.REGISTRATION}> here </Link>
            </span>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
