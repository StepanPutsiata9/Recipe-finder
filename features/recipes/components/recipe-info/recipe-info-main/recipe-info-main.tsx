import { JSX } from 'react';
import { Text, View } from 'react-native';

import { FeatherIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useRecipeInfo } from '../../../hooks';
import useStyles from './recipe-info-main.styles';

export function RecipeMainInfo(): JSX.Element {
  const { colors } = useTheme();
  const styles = useStyles();
  const { recipe } = useRecipeInfo();

  return (
    <View style={styles.mainInfo}>
      <Text style={styles.recipeTitle}>{recipe?.strMeal}</Text>

      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <FeatherIcon name="globe" size={14} color={colors.primary} />
          <Text style={styles.tagText}>{recipe?.strArea}</Text>
        </View>

        <View style={styles.tag}>
          <FeatherIcon name="tag" size={14} color={colors.primary} />
          <Text style={styles.tagText}>{recipe?.strCategory}</Text>
        </View>

        {recipe?.strTags && (
          <View style={styles.tag}>
            <FeatherIcon name="hash" size={14} color={colors.primary} />
            <Text style={styles.tagText}>{recipe?.strTags}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
