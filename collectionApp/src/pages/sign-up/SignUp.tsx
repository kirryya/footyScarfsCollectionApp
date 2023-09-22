import { Link } from 'react-router-dom';

import { ContainerWrapper } from '@/common/container-wrapper';
import { routes } from '@/const';
import { SignUpForm } from '@/pages/sign-up/Sign-Up-Form/SignUpForm.tsx';
import { ReturnComponentType } from '@/types';

export const SignUp = (): ReturnComponentType => {
  return (
    <ContainerWrapper>
      <span>Регистрация</span>
      <span>Пожалуйста введите свои данные для входа в ваш персональный аккаунт</span>
      <SignUpForm />
      <Link to={routes.REGISTRATION}>Регистрация</Link>
    </ContainerWrapper>
  );
};
