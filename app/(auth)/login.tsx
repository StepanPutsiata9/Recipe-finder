import { useAuth, useAuthForm } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { AuthBanner, Input, PrimaryButton } from '@/features/shared';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import { useRouter } from 'expo-router';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Login() {
  const router = useRouter();
  const { t } = useLocalization('auth');
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const { handleLogin } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useAuthForm(true);

  const handleSignUpLink = () => {
    router.navigate('/(auth)/registration');
  };

  const onSubmit = (data: { email: string; password: string }) => {
    handleLogin(data.email, data.password);
  };

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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={t('loginPlaceholder')}
                  error={errors.email?.message}
                  isSecure={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={t('passwordPlaceholder')}
                  error={errors.password?.message}
                  isSecure={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                />
              )}
            />
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              disabled={isSubmitting}
              onPress={handleSubmit(onSubmit)}
              title={t('signIn')}
            />
          </View>

          <Text style={styles.link} onPress={handleSignUpLink}>
            {t('linkToSignUp')} <Text style={styles.signUpText}>{t('signUp')}</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
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
      paddingHorizontal: indets.m,
      justifyContent: 'center',
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xl,
      textAlign: 'center',
      fontFamily: 'Montserrat',
      marginBottom: indets.xl,
    },
    banner: {
      alignItems: 'center',
      marginBottom: indets.xl,
    },
    inputsContainer: {
      width: '100%',
      marginBottom: indets.xl,
      gap: indets.s,
    },
    buttonContainer: {
      marginBottom: indets.xl,
    },
    link: {
      fontFamily: 'Montserrat',
      fontSize: fontSize.s,
      textAlign: 'center',
      color: colors.text.secondary,
    },
    signUpText: {
      color: colors.primary,
    },
  });
