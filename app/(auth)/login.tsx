import { useRouter } from 'expo-router';
import { JSX } from 'react';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/auth-styles/login.styles';
import { useAuth, useAuthForm } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { AuthBanner, Input, KeyboardAware, PrimaryButton } from '@/features/shared';

export default function Login(): JSX.Element {
  const router = useRouter();
  const { t } = useLocalization('auth');
  const styles = useStyles();
  const { handleLogin } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useAuthForm(true);

  const handleSignUpLink = (): void => {
    router.navigate('/(auth)/registration/registration-screen');
  };

  const onSubmit = (data: { email: string; password: string }): void => {
    handleLogin(data.email, data.password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAware contentContainerStyle={styles.scrollContent} bottomOffset={65}>
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
      </KeyboardAware>
    </SafeAreaView>
  );
}
