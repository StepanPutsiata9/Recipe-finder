import { AppNavigationStack } from '@/features/initialize-app';
import i18next from '@/languages';
import { store } from '@/store';
import { PortalProvider } from '@gorhom/portal';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplash();
  }, []);

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
