import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

// @ts-ignore
import s from './login-form.module.scss';

import { routes } from '@/const';
import { MIN_PASSWORD_LENGTH } from '@/const/consts.ts';
// @ts-ignore
import { signInUser } from '@/firebase';
// @ts-ignore
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
        <input type="email" {...register('email')} />
        <span className={s.messageError}>{errors.email?.message}</span>
        <input type="password" {...register('password')} />
        <span className={s.messageError}>{errors.password?.message}</span>

        <button type="submit">Вход</button>

        <span className={s.messageError}>{error}</span>
      </div>
    </form>
  );
};
