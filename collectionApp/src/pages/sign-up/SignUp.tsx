import { Link } from 'react-router-dom';

import { ContainerWrapper } from '@/common/container-wrapper';
import { routes } from '@/const';
import { SignUpForm } from '@/pages/sign-up/Sign-Up-Form/SignUpForm.tsx';
import { ReturnComponentType } from '@/types';

export const SignUp = (): ReturnComponentType => {
  return (
    <ContainerWrapper>
      <span>Регистрация</span>
      <span>Пожалуйста введите свои данные для регистрации</span>
      <SignUpForm />
      <Link to={routes.HOME}>На Главную</Link>
    </ContainerWrapper>
  );
};
