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
      <Stack.Screen name="search" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="recipe-info" />
    </Stack>
  );
}
