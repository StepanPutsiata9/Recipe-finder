import { LogoutButton } from '@/features/auth';
import { LanguageSwitcher } from '@/features/localization';
import { IColorsTheme, SwitchThemeButton, useTheme } from '@/features/theme';
import { ChangeAvatarButton } from '@/features/userAvatar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const { colors } = useTheme();
  const styles = useStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.buttonsContainer}>
        <SwitchThemeButton colors={colors} />
        <LanguageSwitcher colors={colors} />
        <ChangeAvatarButton colors={colors} />
        <LogoutButton colors={colors} />
      </View>
    </SafeAreaView>
  );
}

const useStyles = (colors: IColorsTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    text: {
      color: colors.text.primary,
      fontSize: 20,
      fontFamily: 'MontserratBold',
      letterSpacing: 0.5,
      marginBottom: 20,
    },
    buttonsContainer: {
      gap: 12,
    },
  });
};
