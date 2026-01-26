import type { JSX } from 'react';
import { Text, View } from 'react-native';

import useStyles from '@/app/_styles/root-styles/tabs-styles/favorites.styles';
import { useLocalization } from '@/features/localization';

export default function Favorites(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('favorites');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('favorites')}</Text>
    </View>
  );
}
