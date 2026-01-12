import { LogoutButton } from '@/features/auth';
import { SwitchThemeButton } from '@/features/theme';
import { ChangeAvatarButton } from '@/features/userAvatar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.buttonsContainer}>
        <SwitchThemeButton onPress={() => {}} />
        <ChangeAvatarButton />
        <LogoutButton onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'MontserratBold',
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  buttonsContainer: {
    gap: 12,
  },
});
