import { Tabs } from 'expo-router';
import type { JSX } from 'react';
import React from 'react';

import { useLocalization } from '@/features/localization';
import { CustomTabBar } from '@/features/shared';

export default function TabsLayout(): JSX.Element {
  const { t } = useLocalization('common');
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false, animation: 'none' }}
    >
      <Tabs.Screen name="index" options={{ title: t('home') }} />
      <Tabs.Screen name="favorites" options={{ title: t('favorites') }} />
      <Tabs.Screen name="settings" options={{ title: t('settings') }} />
    </Tabs>
  );
}
