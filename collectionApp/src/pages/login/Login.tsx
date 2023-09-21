import { Link } from 'react-router-dom';

import { ContainerWrapper } from '@/common/container-wrapper';
import { routes } from '@/const';
import { LoginForm } from '@/pages/login/Lofin-Form/LoginForm.tsx';
import { ReturnComponentType } from '@/types';

export const Login = (): ReturnComponentType => {
  return (
    <ContainerWrapper>
      <div>
        <span>Вход</span>
        <span>Пожалуйста введите свои данные для входа в ваш персональный аккаунт</span>
        <LoginForm />
        <Link to={routes.REGISTRATION}>Регистрация</Link>
      </div>
    </ContainerWrapper>
  );
};
