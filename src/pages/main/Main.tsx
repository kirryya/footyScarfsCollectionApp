import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { routes } from '@/const';
import { endSession, isLoggedIn, getSession } from '@/storage/session';
import { ReturnComponentType } from '@/types';

export const Main = (): ReturnComponentType => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(routes.LOGIN);
    }

    const session = getSession();

    setEmail(session.email);
  }, [navigate]);
  const onLogOutButtonClick = (): void => {
    endSession();
    navigate(routes.HOME);
  };

  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={onLogOutButtonClick}>
        Log Out
      </button>
    </div>
  );
};
