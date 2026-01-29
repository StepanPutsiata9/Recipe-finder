import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { JSX, useEffect } from 'react';

import { useAuth } from '@/features/auth';
import { LoadingModal, LoadingScreen } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useInitializeApp } from '../../hooks';

export const AppNavigationStack = (): JSX.Element => {
  const { isDark } = useTheme();
  const { user, isLoading } = useAuth();
  const { isAppInitialized, initializeApp } = useInitializeApp();
  useEffect(() => {
    initializeApp();
  }, []);

  if (!isAppInitialized) {
    return <LoadingScreen />;
  }
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <LoadingModal visible={isLoading} />
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
