import { JSX } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/tabs-styles/settings.styles';
import { LogoutButton } from '@/features/auth';
import { LanguageSwitcher } from '@/features/localization';
import { SwitchThemeButton } from '@/features/theme';
import { ChangeAvatarButton } from '@/features/user-avatar';

export default function Settings(): JSX.Element {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.buttonsContainer}>
        <SwitchThemeButton />
        <LanguageSwitcher />
        <ChangeAvatarButton />
        <LogoutButton />
      </View>
    </SafeAreaView>
  );
}
