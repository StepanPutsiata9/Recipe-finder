import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export function LoadingScreen() {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require('@/assets/animations/Loader.json')}
      />
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
});
