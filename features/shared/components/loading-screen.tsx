import LottieView from 'lottie-react-native';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export function LoadingScreen() {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require('@/assets/animations/loader.json')}
      />
      <Text style={styles.text}>Recipe Finder</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9beac',
  },
  animation: { width: 200, height: 200 },
  text: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'MontserratBold',
  },
});
