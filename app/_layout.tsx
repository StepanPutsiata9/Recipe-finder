import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

function AppNavigationStack() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Protected guard={!!true}>
          <Stack.Screen name="(root)" />
        </Stack.Protected>
        <Stack.Protected guard={!false}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return <AppNavigationStack />;
}
