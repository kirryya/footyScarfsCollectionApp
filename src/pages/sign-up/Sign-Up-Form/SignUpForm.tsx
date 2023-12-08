import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

// @ts-ignore
import s from './sign-up-form.module.scss';

import { MIN_PASSWORD_LENGTH } from '@/const/consts.ts';
import { createUser } from '@/firebase';
import { startSession } from '@/storage/session';
import { ReturnComponentType } from '@/types';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(MIN_PASSWORD_LENGTH),
});

type FormValues = z.infer<typeof loginSchema>;

export const SignUpForm = (): ReturnComponentType => {
  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });
  // const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      const { user } = await createUser(email, password);

      startSession(user);
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

        <button type="submit">Регистрация</button>

        <span className={s.messageError}>{error}</span>
      </div>
    </form>
  );
};
