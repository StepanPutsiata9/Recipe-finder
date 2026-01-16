import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuthSchema } from './useAuthSchema';

export const useAuthForm = (isLogin: boolean = true) => {
  const { authSchema, registerSchema } = useAuthSchema();

  const schema = isLogin ? authSchema : registerSchema;

  const formMethods = useForm({
    resolver: yupResolver(schema),
    defaultValues: isLogin
      ? { login: '', password: '' }
      : { login: '', password: '', confirmPassword: '' },
    mode: 'onBlur',
  });

  return formMethods;
};
