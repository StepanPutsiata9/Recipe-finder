import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { View } from 'react-native';

import { animations } from '@/paths';

import { useStyles } from './searched-list.styles';

export const ListEmptyComponent = (): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.emptyContainer}>
      <LottieView autoPlay style={styles.animation} source={animations.searchBanner} />
    </View>
  );
};
