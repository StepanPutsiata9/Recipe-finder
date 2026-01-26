import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { animations } from '@/paths';

import { useStyles } from './loading-screen.styles';

export function LoadingScreen(): JSX.Element {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.modalContainer}>
      <LottieView autoPlay style={styles.animation} source={animations.loader} />
      <Text style={styles.text}>Recipe Finder</Text>
    </SafeAreaView>
  );
}
