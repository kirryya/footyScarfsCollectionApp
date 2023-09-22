// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';

// import s from './login-form.module.scss';

import { ContainerWrapper } from '@/common/container-wrapper';
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
  const { register, handleSubmit } = useForm<FormValues>();
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: { email: '', password: '' },
  // });
  // const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      const { user } = await createUser(email, password);

      startSession(user);
    } catch (error) {
      // @ts-ignore
      setError(error.data.response.data.message);
    }
  };

  return (
    <ContainerWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('password')} />

        <button type="submit">Вход</button>

        <span>{error}</span>
      </form>
    </ContainerWrapper>
  );
};
