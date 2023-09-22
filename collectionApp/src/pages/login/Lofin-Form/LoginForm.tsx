// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';

// @ts-ignore
import s from './login-form.module.scss';

// import s from './login-form.module.scss';
// @ts-ignore
import { createUser } from '@/firebase';
// @ts-ignore
import { startSession } from '@/storage/session';
import { ReturnComponentType } from '@/types';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
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

        <button type="submit">Вход</button>

        <span className={s.messageError}>{error}</span>
      </div>
    </form>
  );
};
