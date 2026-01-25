import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Alert } from 'react-native';

import { useLocalization } from '@/features/localization';
import { auth, onAuthChange } from '@/firebase/config';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { setLoading, setUser } from '../store/auth.slice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { t } = useLocalization('auth');

  const loadUser = async (): Promise<void> => {
    dispatch(setLoading(true));
    return new Promise<void>((resolve) => {
      const unsubscribe = onAuthChange((firebaseUser) => {
        unsubscribe();
        dispatch(setUser(firebaseUser ?? null));
        resolve();
        dispatch(setLoading(false));
      });
    });
  };

  const handleLogin = async (email: string, password: string): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch {
      Alert.alert(t('loginFail'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleRegistration = async (email: string, password: string): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch {
      Alert.alert(t('registerFail'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogout = async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      await signOut(auth);
      dispatch(setUser(null));
      router.replace('/(auth)/login/login-screen');
    } catch {
      Alert.alert(t('erorr'), t('signOutFail'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogoutPress = (): void => {
    Alert.alert(
      t('signOut'),
      t('signOutWarning'),
      [
        {
          text: t('cancel'),
          style: 'cancel',
        },
        {
          text: t('signOut'),
          style: 'destructive',
          onPress: handleLogout,
        },
      ],
      { cancelable: true }
    );
  };

  const checkAuth = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthChange((user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
  };

  const getUserEmail = (email: string): string => {
    return email && email.length > 13 ? email.slice(0, 13) + '...' : email;
  };
  return {
    user,
    handleLogin,
    handleRegistration,
    isLoading: isLoading,
    handleLogoutPress,
    loadUser,
    checkAuth,
    getUserEmail,
  };
};
