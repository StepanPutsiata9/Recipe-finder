import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export const useAuthSchema = () => {
  const { t } = useTranslation('validation');

  const emailSchema = yup
    .string()
    .email(t('email.invalid'))
    .required(t('email.required'))
    .min(8, t('email.min'));

  const passwordSchema = yup.string().required(t('password.required')).min(8, t('password.min'));

  const authSchema = yup.object({
    email: emailSchema,
    password: passwordSchema,
  });

  const registerSchema = yup.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: yup
      .string()
      .required(t('confirmPassword.required'))
      .oneOf([yup.ref('password')], t('confirmPassword.match')),
  });

  return {
    authSchema,
    registerSchema,
  };
};

export type AuthFormData = yup.InferType<ReturnType<typeof useAuthSchema>['authSchema']>;
export type RegisterFormData = yup.InferType<ReturnType<typeof useAuthSchema>['registerSchema']>;
