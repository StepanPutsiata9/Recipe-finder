import type { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/search.styles';
import { useLocalization } from '@/features/localization';
import { RecipeSearchInput } from '@/features/recipes';
import { HeaderBack } from '@/features/shared';

export default function Search(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('search');

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title={t('search')} />
      <RecipeSearchInput />
    </SafeAreaView>
  );
}
