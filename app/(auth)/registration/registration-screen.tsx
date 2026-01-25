import { useAuth, useAuthForm } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { Input, KeyboardAware, PrimaryButton, RegistrationBanner } from '@/features/shared';
import { useRouter } from 'expo-router';
import { JSX } from 'react';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './_registration-screen.styles';

export default function Registration(): JSX.Element {
  const router = useRouter();
  const handleSignInLink = (): void => {
    router.navigate('/(auth)/login/login-screen');
  };
  const { t } = useLocalization('auth');
  const { handleRegistration } = useAuth();
  const styles = useStyles();
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
      <KeyboardAware contentContainerStyle={styles.scrollContent} bottomOffset={65}>
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
      </KeyboardAware>
    </SafeAreaView>
  );
}
