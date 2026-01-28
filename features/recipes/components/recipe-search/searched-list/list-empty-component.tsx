import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { Text, View } from 'react-native';

import { animations } from '@/paths';

import { useStyles } from './searched-list.styles';

interface ListEmptyComponentProps {
  hasSearched?: boolean;
}

export const ListEmptyComponent = ({
  hasSearched = false,
}: ListEmptyComponentProps): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.emptyContainer}>
      {hasSearched ? (
        <Text style={styles.emptyText}>Ничего не найдено</Text>
      ) : (
        <>
          <LottieView autoPlay style={styles.animation} source={animations.searchBanner} />
          <Text style={styles.emptyText}>Попробуй что-нибудь найти</Text>
        </>
      )}
    </View>
  );
};
