import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { JSX, useEffect } from 'react';

import { useAuth } from '@/features/auth';
import { LoadingModal, LoadingScreen } from '@/features/shared';
import { useTheme } from '@/features/theme';
import { useAvatar } from '@/features/user-avatar';

import { useInitializeApp } from '../../hooks';

export const AppNavigationStack = (): JSX.Element => {
  const { isDark } = useTheme();
  const { user, isLoading } = useAuth();
  const { isAppInitialized, initializeApp } = useInitializeApp();
  const { avatarLoading } = useAvatar();
  const [loaded, error] = useFonts({
    Montserrat: require('@/assets/fonts/Montserrat.ttf'),
    MontserratBold: require('@/assets/fonts/MontserratBold.ttf'),
    MontserratRegular: require('@/assets/fonts/MontserratRegular.ttf'),
  });

  useEffect(() => {
    initializeApp();
  }, []);

  if (!isAppInitialized || (!loaded && !error)) {
    return <LoadingScreen />;
  }
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <LoadingModal visible={isLoading || avatarLoading} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Protected guard={!!user}>
          <Stack.Screen name="(root)" />
        </Stack.Protected>
        <Stack.Protected guard={!user}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </>
  );
};
