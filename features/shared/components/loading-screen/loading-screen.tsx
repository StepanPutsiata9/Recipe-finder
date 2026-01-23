import { useTheme } from '@/features/theme';
import { fontSize } from '@/styles';
import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './loading-screen.styles';
export function LoadingScreen(): JSX.Element {
  const { loadingColors } = useTheme();
  const styles = useStyles(loadingColors, fontSize);
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
