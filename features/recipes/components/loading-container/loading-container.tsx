import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { View } from 'react-native';

import { animations } from '@/paths';

import { useStyles } from './loading-container.styles';

interface LoadingContainerProps {
  isLoading: boolean;
}

export function LoadingContainer({ isLoading }: LoadingContainerProps): JSX.Element | null {
  const styles = useStyles();

  if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <LottieView autoPlay style={styles.animation} source={animations.loader} />
    </View>
  );
}
