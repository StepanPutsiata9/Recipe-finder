import { type JSX, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/search.styles';
import { useLocalization } from '@/features/localization';
import { ErrorContainer, RecipeSearchInput, SearchedRecipesList } from '@/features/recipes';
import { useSearchRecipes } from '@/features/recipes/hooks';
import { HeaderBack } from '@/features/shared';
import { useTheme } from '@/features/theme';

export default function Search(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('search');
  const { colors } = useTheme();
  const { clearSearchedRecipes, searchRecipesErorr, searchRecipesLoading } = useSearchRecipes();
  useEffect(() => {
    return () => {
      clearSearchedRecipes();
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title={t('search')} />
      <RecipeSearchInput />
      {searchRecipesLoading && <ActivityIndicator size={'large'} color={colors.primary} />}
      {searchRecipesErorr && <ErrorContainer error={searchRecipesErorr} />}
      {!searchRecipesLoading && !searchRecipesErorr && (
        <>
          <SearchedRecipesList />
        </>
      )}
    </SafeAreaView>
  );
}
