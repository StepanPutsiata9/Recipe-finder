import type { JSX } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/tabs-styles/favorites.styles';
import { useLocalization } from '@/features/localization';
import { ErrorContainer, FavoritesRecipesList, LoadingContainer } from '@/features/recipes';
import { useFavoritesRecipes } from '@/features/recipes/hooks';

export default function Favorites(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('favorites');
  const { favoritesRecipesLoading, favoritesRecipesErorr } = useFavoritesRecipes();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{t('favorites')}</Text>
      {favoritesRecipesLoading && <LoadingContainer isLoading={favoritesRecipesLoading} />}
      {favoritesRecipesErorr && <ErrorContainer error={favoritesRecipesErorr} />}
      {!favoritesRecipesLoading && !favoritesRecipesErorr && <FavoritesRecipesList />}
    </SafeAreaView>
  );
}
