import * as yup from 'yup';

export const loginSchema = yup
  .string()
  .required('Login is required')
  .min(8, 'Login must be at least 8 characters');

export const passwordSchema = yup
  .string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters');

export const authSchema = yup.object({
  login: loginSchema,
  password: passwordSchema,
});

export const registerSchema = yup.object({
  login: loginSchema,
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export type AuthFormData = yup.InferType<typeof authSchema>;
export type RegisterFormData = yup.InferType<typeof registerSchema>;
