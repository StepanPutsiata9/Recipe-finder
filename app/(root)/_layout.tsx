import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
