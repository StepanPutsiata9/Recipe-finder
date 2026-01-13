import { LoadingModal } from '@/features/shared';
import { store } from '@/store';
import { PortalProvider } from '@gorhom/portal';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';
SplashScreen.preventAutoHideAsync();

function AppNavigationStack() {
  return (
    <>
      <StatusBar style="dark" />
      <LoadingModal visible={false} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Protected guard={true}>
          <Stack.Screen name="(root)" />
        </Stack.Protected>
        <Stack.Protected guard={false}>
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
      <GestureHandlerRootView style={styles.root}>
        <PortalProvider>
          <KeyboardProvider>
            <AppNavigationStack />
          </KeyboardProvider>
        </PortalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1 },
});
