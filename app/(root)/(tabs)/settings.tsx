import { LogoutButton } from '@/features/auth';
import { LanguageSwitcher } from '@/features/localization';
import { SwitchThemeButton, useTheme } from '@/features/theme';
import { ChangeAvatarButton } from '@/features/user-avatar';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);

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

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: indets.l,
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xl,
      fontFamily: 'MontserratBold',
      letterSpacing: 0.5,
      marginBottom: indets.l,
    },
    buttonsContainer: {
      gap: indets.s,
    },
  });
};
