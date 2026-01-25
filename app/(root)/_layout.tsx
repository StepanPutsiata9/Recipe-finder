import { Stack } from 'expo-router';
import { JSX } from 'react';

export default function MainLayout(): JSX.Element {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="search/search-screen" />
      <Stack.Screen name="notifications/notifications-screen" />
    </Stack>
  );
}
