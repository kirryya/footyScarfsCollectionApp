import { Link } from 'react-router-dom';

import { ContainerWrapper } from '@/common/container-wrapper';
import { routes } from '@/const';
import { LoginForm } from '@/pages/login/Lofin-Form/LoginForm.tsx';
import { ReturnComponentType } from '@/types';

export const Login = (): ReturnComponentType => {
  return (
    <ContainerWrapper>
      <h2>Вход</h2>
      <span style={{ textAlign: 'center' }}>Пожалуйста, введите данные для входа в ваш персональный аккаунт</span>
      <LoginForm />
      <span>
        Вернуться к <Link to={routes.REGISTRATION}>Регистрации</Link>{' '}
      </span>
    </ContainerWrapper>
  );
};
