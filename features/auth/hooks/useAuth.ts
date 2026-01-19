import { auth } from '@/firebase/config';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Alert } from 'react-native';
import { setLoading, setUser } from '../store/auth.slice';
export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const getAuthErrorMessage = (error: FirebaseError): string => {
    console.log(error.code);
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Неверный формат email';
      case 'auth/user-disabled':
        return 'Аккаунт отключен';
      case 'auth/user-not-found':
        return 'Пользователь не найден';
      case 'auth/wrong-password':
        return 'Неверный пароль';
      case 'auth/email-already-in-use':
        return 'Этот email уже используется';
      case 'auth/weak-password':
        return 'Пароль должен содержать минимум 6 символов';
      case 'auth/operation-not-allowed':
        return 'Регистрация по email отключена';
      case 'auth/too-many-requests':
        return 'Слишком много попыток. Попробуйте позже';
      case 'auth/network-request-failed':
        return 'Ошибка сети. Проверьте подключение';
      default:
        return 'Произошла ошибка. Попробуйте еще раз';
    }
  };
  const handleLogin = async (loginText: string, passwordText: string) => {
    dispatch(setLoading(true));
    try {
      console.log(loginText, ' ', passwordText);

      const userCredential = await signInWithEmailAndPassword(auth, loginText, passwordText);
      console.log(userCredential);
      dispatch(setUser(userCredential.user.email));
      dispatch(setLoading(false));
    } catch {
      Alert.alert('Ошибка при входе');
      router.push('/(auth)/login');
      dispatch(setLoading(false));
    }
  };
  const handleRegistration = async (loginText: string, passwordText: string) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, loginText, passwordText);
      console.log('Пользователь создан:', userCredential.user.uid);
      dispatch(setUser(userCredential.user.email));
      dispatch(setLoading(false));
    } catch (error) {
      const errorMessage =
        error instanceof FirebaseError
          ? getAuthErrorMessage(error)
          : 'Не удалось войти. Проверьте данные';

      Alert.alert('Ошибка регистрации', errorMessage);
      router.push('/(auth)/registration');
      dispatch(setLoading(false));
    }
  };

  const handleLogout = async () => {
    dispatch(setLoading(true));
    try {
      await signOut(auth);
    } catch {
      Alert.alert('Ошибка при выходе');

      dispatch(setLoading(false));
    }
  };
  const handleLogoutPress = () => {
    Alert.alert(
      'Выход',
      'Вы уверены, что хотите выйти?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Выйти',
          style: 'destructive',
          onPress: async () => {
            try {
              await handleLogout();
              router.replace('/(auth)/login');
            } catch (error) {
              console.error('Logout error:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return {
    user,
    handleLogin,
    handleRegistration,
    isLoading,
    handleLogoutPress,
  };
};
