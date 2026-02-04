import { JSX } from 'react';
import { Text, View } from 'react-native';

import { useLocalization } from '@/features/localization';

import { useStyles } from './favorites-recipes-list.styles';

export const ListEmptyComponent = (): JSX.Element => {
  const styles = useStyles();
  const { t } = useLocalization('favorites');
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{t('emptyText')}</Text>
    </View>
  );
};
