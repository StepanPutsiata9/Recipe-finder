import { AuthBanner, Input, PrimaryButton } from '@/features/shared';
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
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        bottomOffset={65}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.text}>Lets cook again!</Text>
          <View style={styles.banner}>
            <AuthBanner />
          </View>
          <View style={styles.inputsContainer}>
            <Input
              value={loginText}
              onChangeText={setLoginText}
              placeholder="Enter login"
              error={null}
              isSecure={false}
            />
            <Input
              value={passwordText}
              onChangeText={setPasswordText}
              placeholder="Enter password"
              error={null}
              isSecure={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => {}} title="Sign In" />
          </View>
          <Text style={styles.link} onPress={handleSignUpLink}>
            Don&apos;t have an account? <Text style={styles.signUpText}>Sign Up</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    color: 'black',
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
    color: '#A0A0A0',
  },
  signUpText: {
    color: '#FF6E41',
  },
});
