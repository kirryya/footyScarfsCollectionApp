import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import s from './login-form.module.scss';

import { routes } from '@/const';
import { MIN_PASSWORD_LENGTH } from '@/const/consts.ts';
import { signInUser } from '@/firebase';
import { startSession } from '@/storage/session';
import { ReturnComponentType } from '@/types';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(MIN_PASSWORD_LENGTH),
});

type FormValues = z.infer<typeof loginSchema>;

export const LoginForm = (): ReturnComponentType => {
  // const { login } = useActions(authThunk);
  const [error, setError] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      const { user } = await signInUser(email, password);

      startSession(user);
      navigate(routes.MAIN);
    } catch (error) {
      // @ts-ignore
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.card}>
        <div style={{ margin: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <input className={s.login_input} type="email" {...register('email')} placeholder="Ведите свой email" />
          <span className={s.messageError}>{errors.email?.message}</span>
        </div>
        <div style={{ margin: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <input className={s.login_input} type="password" {...register('password')} placeholder="Ведите свой пароль" />
          <span className={s.messageError}>{errors.password?.message}</span>
        </div>

        <button type="submit" className={s.login_button} disabled={!!errors.email || !!errors.password}>
          Вход
        </button>

        <span className={s.messageError}>{error}</span>
      </div>
    </form>
  );
};
