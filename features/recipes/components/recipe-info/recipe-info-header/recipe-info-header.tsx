import { useRouter } from 'expo-router';
import { JSX } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useRecipeAnimations, useRecipeInfo } from '@/features/recipes';
import { FeatherIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import useStyles from './recipe-info-header.styles';

export const RecipeInfoHeader = (): JSX.Element => {
  const styles = useStyles();
  const router = useRouter();
  const { recipe, toggleFavorite, isFavorite } = useRecipeInfo();
  const { imageAnimationStyle } = useRecipeAnimations();
  const { colors } = useTheme();
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
          <FeatherIcon
            name={isFavorite ? 'heart' : 'heart'}
            size={24}
            color={isFavorite ? colors.error : colors.activeCategory}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
