import { useAuth, useAuthForm } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { Input, PrimaryButton, RegistrationBanner } from '@/features/shared';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import { useRouter } from 'expo-router';
import { JSX } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Registration(): JSX.Element {
  const router = useRouter();
  const handleSignInLink = (): void => {
    router.navigate('/(auth)/login');
  };
  const { t } = useLocalization('auth');
  const { colors } = useTheme();
  const { handleRegistration } = useAuth();
  const styles = useStyles(colors, indets, fontSize);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useAuthForm(false);
  const onSubmit = (data: { email: string; password: string }): void => {
    handleRegistration(data.email, data.password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        bottomOffset={65}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{t('greetingRegistration')}</Text>
          <View style={styles.banner}>
            <RegistrationBanner />
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
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value || ''}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={t('repidPasswordPlaceholder')}
                  error={errors.confirmPassword?.message}
                  isSecure={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={handleSubmit(onSubmit)}
              title={t('signUp')}
              disabled={isSubmitting}
            />
          </View>
          <Text style={styles.link} onPress={handleSignInLink}>
            {t('linkToSignIn')} <Text style={styles.signInText}>{t('signIn')}</Text>
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
    signInText: {
      color: colors.primary,
    },
  });
