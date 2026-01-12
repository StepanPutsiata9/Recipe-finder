import { LogoutButton } from '@/features/auth';
import { SwitchThemeButton } from '@/features/theme';
import { ChangeAvatarButton } from '@/features/userAvatar';
import { PortalProvider } from '@gorhom/portal';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Settings</Text>
          <View style={styles.buttonsContainer}>
            <SwitchThemeButton onPress={() => {}} />
            <ChangeAvatarButton />
            <LogoutButton onPress={() => {}} />
          </View>
        </SafeAreaView>
      </PortalProvider>
    </GestureHandlerRootView>
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
