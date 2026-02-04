import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { Text, View } from 'react-native';

import { useLocalization } from '@/features/localization';
import { animations } from '@/paths';

import { useStyles } from './searched-list.styles';

interface ListEmptyComponentProps {
  hasSearched?: boolean;
}

export const ListEmptyComponent = ({
  hasSearched = false,
}: ListEmptyComponentProps): JSX.Element => {
  const styles = useStyles();
  const { t } = useLocalization('search');

  return (
    <View style={styles.emptyContainer}>
      {hasSearched ? (
        <Text style={styles.emptyText}>{t('emptyText')}</Text>
      ) : (
        <>
          <LottieView autoPlay style={styles.animation} source={animations.searchBanner} />
          <Text style={styles.emptyText}>{t('tryToSearch')}</Text>
        </>
      )}
    </View>
  );
};
