import { type JSX, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/search.styles';
import { useLocalization } from '@/features/localization';
import { RecipeSearchInput, SearchedRecipesList } from '@/features/recipes';
import { useSearchRecipes } from '@/features/recipes/hooks';
import { HeaderBack } from '@/features/shared';

export default function Search(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('search');
  const { clearSearchedRecipes } = useSearchRecipes();
  useEffect(() => {
    return () => {
      clearSearchedRecipes();
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title={t('search')} />
      <RecipeSearchInput />
      <SearchedRecipesList />
    </SafeAreaView>
  );
}
