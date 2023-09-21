// eslint-disable-next-line import/no-extraneous-dependencies
import { SubmitHandler, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';

// import s from './login-form.module.scss';

import { ReturnComponentType } from '@/types';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

type FormValues = z.infer<typeof loginSchema>;

export const LoginForm = (): ReturnComponentType => {
  // const { login } = useActions(authThunk);
  // const [error, setError] = useState<string>('');
  const { register, handleSubmit } = useForm<FormValues>();
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: { email: '', password: '' },
  // });
  // const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email')} />
      <input type="password" {...register('password')} />

      <button type="submit">Вход</button>
    </form>
  );
};
