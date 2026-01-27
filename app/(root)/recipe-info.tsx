import { router, useLocalSearchParams } from 'expo-router';
import { JSX, useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import useStyles from '@/app/_styles/root-styles/recipe-info.styles';
import { useLocalization } from '@/features/localization';
import {
  ErrorContainer,
  LoadingContainer,
  useRecipeAnimations,
  useRecipeInfo,
} from '@/features/recipes';
import { FeatherIcon, PrimaryButton } from '@/features/shared';
import { useTheme } from '@/features/theme';

export default function RecipeDetailScreen(): JSX.Element {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  const styles = useStyles();
  const { t } = useLocalization('recipeInfo');
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    loadRecipeInfo,
    recipeLoading,
    recipe,
    recipeError,
    extractIngredients,
    handleOpenYoutube,
  } = useRecipeInfo();
  const {
    tabAnimation,
    scrollHandler,
    imageAnimationStyle,
    animatedTabStyle,
    setTabContainerWidth,
  } = useRecipeAnimations();

  const handleTabChange = (tab: 'ingredients' | 'instructions') => {
    setActiveTab(tab);
    tabAnimation.value = tab === 'ingredients' ? 0 : 1;
  };

  useEffect(() => {
    loadRecipeInfo(id.toString());
  }, [id]);

  const ingredients = recipe ? extractIngredients(recipe) : [];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
      <Animated.View style={[styles.header, imageAnimationStyle]}>
        <ImageBackground
          source={{ uri: recipe.strMealThumb }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.headerOverlay}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <FeatherIcon name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={toggleFavorite}>
            <FeatherIcon
              name={isFavorite ? 'heart' : 'heart'}
              size={24}
              color={isFavorite ? '#ff4757' : '#fff'}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.mainInfo}>
          <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>

          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <FeatherIcon name="globe" size={14} color={colors.primary} />
              <Text style={styles.tagText}>{recipe.strArea}</Text>
            </View>

            <View style={styles.tag}>
              <FeatherIcon name="tag" size={14} color={colors.primary} />
              <Text style={styles.tagText}>{recipe.strCategory}</Text>
            </View>

            {recipe.strTags && (
              <View style={styles.tag}>
                <FeatherIcon name="hash" size={14} color={colors.primary} />
                <Text style={styles.tagText}>{recipe.strTags}</Text>
              </View>
            )}
          </View>
        </View>

        <View
          style={styles.tabsContainer}
          onLayout={(event) => setTabContainerWidth(event.nativeEvent.layout.width)}
        >
          <Animated.View style={[styles.activeTabIndicator, animatedTabStyle]} />
          <TouchableOpacity
            style={[styles.tab, activeTab === 'ingredients' && styles.activeTab]}
            onPress={() => handleTabChange('ingredients')}
          >
            <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
              {t('ingredients')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'instructions' && styles.activeTab]}
            onPress={() => handleTabChange('instructions')}
          >
            <Text style={[styles.tabText, activeTab === 'instructions' && styles.activeTabText]}>
              {t('instructions')}
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'ingredients' ? (
          <View style={styles.ingredientsSection}>
            <Text style={styles.sectionTitle}>
              {t('ingredients')} ({ingredients.length})
            </Text>

            <View style={styles.ingredientsList}>
              {ingredients.map((item, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <View style={styles.ingredientDot} />
                  <Text style={styles.ingredientText}>
                    <Text style={styles.measureText}>{item.measure} </Text>
                    {item.ingredient}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.instructionsSection}>
            <Text style={styles.sectionTitle}>{t('stepInstructions')}</Text>

            <View style={styles.instructionsContent}>
              {recipe.strInstructions
                .split('\r\n')
                .filter((step) => step.trim())
                .map((step, index) => (
                  <View key={index} style={styles.stepItem}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.stepText}>{step.trim()}</Text>
                  </View>
                ))}
            </View>
          </View>
        )}
        {recipe.strYoutube && (
          <PrimaryButton title={t('watchVideo')} onPress={handleOpenYoutube} disabled={false} />
        )}
      </View>
    </Animated.ScrollView>
  );
}
