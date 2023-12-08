import { useNavigate } from 'react-router-dom';

import { routes } from '@/const';
// @ts-ignore
import { endSession } from '@/storage/session';
import { ReturnComponentType } from '@/types';

export const Main = (): ReturnComponentType => {
  const navigate = useNavigate();
  const onLogOutButtonClick = (): void => {
    endSession();
    navigate(routes.HOME);
  };

  return (
    <div>
      Main
      <button type="button" onClick={onLogOutButtonClick}>
        Log Out
      </button>
    </div>
  );
};
