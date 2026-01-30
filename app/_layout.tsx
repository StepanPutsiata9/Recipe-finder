import { PortalProvider } from '@gorhom/portal';
import * as SplashScreen from 'expo-splash-screen';
import type { JSX } from 'react';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';

import { AppNavigationStack } from '@/features/initialize-app';
import i18next from '@/languages';
import { store } from '@/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <GestureHandlerRootView>
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
