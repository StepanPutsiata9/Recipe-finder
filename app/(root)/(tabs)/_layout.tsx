import { useLocalization } from '@/features/localization';
import { CustomTabBar } from '@/features/shared';
import { useTheme } from '@/features/theme';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  const { colors } = useTheme();
  const { t } = useLocalization('common');
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} colors={colors} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: t('home') }} />
      <Tabs.Screen name="favorites" options={{ title: t('favorites') }} />
      <Tabs.Screen name="settings" options={{ title: t('settings') }} />
    </Tabs>
  );
}
