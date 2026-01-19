import { auth } from '@/firebase/config';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Alert } from 'react-native';
import { setLoading, setUser } from '../store/auth.slice';
export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const handleLogin = async (loginText: string, passwordText: string) => {
    dispatch(setLoading(true));
    try {
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
      dispatch(setUser(userCredential.user.email));
      dispatch(setLoading(false));
    } catch {
      Alert.alert('Ошибка регистрации');
      router.push('/(auth)/registration');
      dispatch(setLoading(false));
    }
  };

  const handleLogout = async () => {
    dispatch(setLoading(true));
    try {
      await signOut(auth);
      dispatch(setLoading(false));
      dispatch(setUser(null));
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
