import { useLocalization } from '@/features/localization';
import { AuthBanner, Input, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const router = useRouter();
  const handleSignUpLink = () => {
    router.navigate('/(auth)/registration');
  };
  const { t } = useLocalization('auth');
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        bottomOffset={65}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{t('greetingAuth')}</Text>
          <View style={styles.banner}>
            <AuthBanner />
          </View>
          <View style={styles.inputsContainer}>
            <Input
              value={loginText}
              onChangeText={setLoginText}
              placeholder={t('loginPlaceholder')}
              error={null}
              isSecure={false}
              colors={colors}
            />
            <Input
              value={passwordText}
              onChangeText={setPasswordText}
              placeholder={t('passwordPlaceholder')}
              error={null}
              isSecure={true}
              colors={colors}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => {}} title={t('signIn')} colors={colors} />
          </View>
          <Text style={styles.link} onPress={handleSignUpLink}>
            {t('linkToSignUp')} <Text style={styles.signUpText}>{t('signUp')}</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: 'center',
    },

    text: {
      color: colors.text.primary,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Montserrat',
      marginBottom: 24,
    },
    banner: {
      alignItems: 'center',
      marginBottom: 24,
    },
    inputsContainer: {
      width: '100%',
      marginBottom: 24,
      gap: 12,
    },
    buttonContainer: {
      marginBottom: 24,
    },
    link: {
      fontFamily: 'Montserrat',
      fontSize: 14,
      textAlign: 'center',
      color: colors.text.secondary,
    },
    signUpText: {
      color: colors.primary,
    },
  });
