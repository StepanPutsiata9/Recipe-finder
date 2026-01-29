import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { animations } from '@/paths';

import { useStyles } from './loading-screen.styles';

export function LoadingScreen(): JSX.Element {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.modalContainer}>
      <LottieView autoPlay style={styles.animation} source={animations.loaderSplash} />
    </SafeAreaView>
  );
}
