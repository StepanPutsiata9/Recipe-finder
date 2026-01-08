import { store } from '@/store/';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
function AppNavigationStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
      >
        <Stack.Protected guard={!!true}>
          <Stack.Screen name="(root)" />
        </Stack.Protected>
        <Stack.Protected guard={!!false}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppNavigationStack />;
    </Provider>
  );
}
