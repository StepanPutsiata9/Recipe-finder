/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { LoadingModal, LoadingScreen } from '@/features/shared';
import { useTheme } from '@/features/theme';
import i18next from '@/languages';
import { store } from '@/store';
import { PortalProvider } from '@gorhom/portal';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';
SplashScreen.preventAutoHideAsync();

function AppNavigationStack() {
  const { loadTheme, isDark } = useTheme();
  const { loadLanguage } = useLocalization();
  const { user, loadUser } = useAuth();
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await Promise.all([loadUser(), loadTheme(), loadLanguage()]);
      } catch (error) {
        console.error('App initialization error:', error);
      } finally {
        setIsAppInitialized(true);
      }
    };

    initializeApp();
  }, []);

  if (!isAppInitialized) {
    return (
      <>
        <StatusBar style="dark" />
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <LoadingModal visible={false} />
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
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat: require('@/assets/fonts/Montserrat.ttf'),
    MontserratBold: require('@/assets/fonts/MontserratBold.ttf'),
    MontserratRegular: require('@/assets/fonts/MontserratRegular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <GestureHandlerRootView style={styles.root}>
          <PortalProvider>
            <KeyboardProvider>
              <AppNavigationStack />
            </KeyboardProvider>
          </PortalProvider>
        </GestureHandlerRootView>
      </I18nextProvider>
    </Provider>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1 },
});
