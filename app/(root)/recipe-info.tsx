import { useLocalSearchParams } from 'expo-router';
import { JSX, useEffect } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import useStyles from '@/app/_styles/root-styles/recipe-info.styles';
import { useLocalization } from '@/features/localization';
import {
  ErrorContainer,
  LoadingContainer,
  RecipeInfoHeader,
  RecipeInfoTabs,
  RecipeMainInfo,
  useRecipeAnimations,
  useRecipeInfo,
} from '@/features/recipes';
import { PrimaryButton } from '@/features/shared';

export default function RecipeDetailScreen(): JSX.Element {
  const { id } = useLocalSearchParams();
  const styles = useStyles();
  const { t } = useLocalization('recipeInfo');
  const { loadRecipeInfo, recipeLoading, recipe, recipeError, handleOpenYoutube } = useRecipeInfo();
  const { scrollHandler } = useRecipeAnimations();

  useEffect(() => {
    loadRecipeInfo(id.toString());
  }, [id]);

  if (recipeLoading) {
    return <LoadingContainer isLoading={recipeLoading} />;
  }

  if (recipeError || !recipe) {
    return <ErrorContainer error={recipeError} />;
  }

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <RecipeInfoHeader />
      <View style={styles.content}>
        <RecipeMainInfo />
        <RecipeInfoTabs />
        {recipe.strYoutube && (
          <PrimaryButton title={t('watchVideo')} onPress={handleOpenYoutube} disabled={false} />
        )}
      </View>
    </Animated.ScrollView>
  );
}
