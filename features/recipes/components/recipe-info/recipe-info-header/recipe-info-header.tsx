import { useRouter } from 'expo-router';
import { JSX, useEffect } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { FeatherIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useFavoritesRecipes, useRecipeAnimations, useRecipeInfo } from '../../../hooks';
import useStyles from './recipe-info-header.styles';

export const RecipeInfoHeader = (): JSX.Element => {
  const styles = useStyles();
  const router = useRouter();
  const {
    toggleFavoriteRecipe,
    isFavoriteValue,
    checkIsFavorite,
    setIsFavoriteValue,
    isFavoriteCheckingLoading,
  } = useFavoritesRecipes();

  const { recipe } = useRecipeInfo();
  const { imageAnimationStyle } = useRecipeAnimations();
  const { colors } = useTheme();

  useEffect(() => {
    if (recipe?.idMeal) {
      checkIsFavorite(recipe.idMeal);
    }
  }, [recipe?.idMeal]);

  const toggleFavorite = () => {
    if (!recipe) return;
    toggleFavoriteRecipe(recipe);
    setIsFavoriteValue(!isFavoriteValue);
  };
  return (
    <Animated.View style={[styles.header, imageAnimationStyle]}>
      <ImageBackground
        source={{ uri: recipe?.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.headerOverlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FeatherIcon name="chevron-left" size={28} color={colors.activeCategory} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={toggleFavorite}>
          {!isFavoriteCheckingLoading && (
            <FeatherIcon
              name={isFavoriteValue ? 'heart' : 'heart'}
              size={24}
              color={isFavoriteValue ? colors.error : colors.activeCategory}
            />
          )}
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
