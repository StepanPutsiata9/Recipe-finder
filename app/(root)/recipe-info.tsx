import { Feather, MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { JSX, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import useStyles from '@/app/_styles/root-styles/recipe-info.styles';
import { FeatherIcon, PrimaryButton } from '@/features/shared';
import { useTheme } from '@/features/theme';

interface RecipeDetail {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube?: string;
  strTags?: string;
  ingredients: {
    ingredient: string;
    measure: string;
  }[];
}

export default function RecipeDetailScreen(): JSX.Element {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  const styles = useStyles();

  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [isFavorite, setIsFavorite] = useState(false);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollY.value, [-200, 0, 200], [-100, 0, 100]),
        },
        {
          scale: interpolate(scrollY.value, [-200, 0, 200], [1.3, 1, 1]),
        },
      ],
    };
  });
  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();

      if (data.meals?.[0]) {
        const meal = data.meals[0];
        const ingredients = extractIngredients(meal);
        setRecipe({
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
          strCategory: meal.strCategory,
          strArea: meal.strArea,
          strInstructions: meal.strInstructions,
          strYoutube: meal.strYoutube,
          strTags: meal.strTags,
          ingredients,
        });
      } else {
        setError('Рецепт не найден');
      }
    } catch (err) {
      setError('Ошибка загрузки рецепта');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const extractIngredients = (meal: any) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure?.trim() || '',
        });
      }
    }
    return ingredients;
  };

  const handleOpenYoutube = () => {
    if (recipe?.strYoutube) {
      Linking.openURL(recipe.strYoutube);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Загружаем рецепт...</Text>
      </View>
    );
  }

  if (error || !recipe) {
    return (
      <View style={styles.errorContainer}>
        <Feather name="alert-circle" size={64} color={colors.error} />
        <Text style={styles.errorText}>{error || 'Рецепт не найден'}</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text>Вернуться назад</Text>
        </TouchableOpacity>
      </View>
    );
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

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'ingredients' && styles.activeTab]}
            onPress={() => setActiveTab('ingredients')}
          >
            <MaterialIcons
              name="kitchen"
              size={20}
              color={activeTab === 'ingredients' ? colors.primary : colors.text.secondary}
            />
            <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
              Ингредиенты
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'instructions' && styles.activeTab]}
            onPress={() => setActiveTab('instructions')}
          >
            <MaterialIcons
              name="menu-book"
              size={20}
              color={activeTab === 'instructions' ? colors.primary : colors.text.secondary}
            />
            <Text style={[styles.tabText, activeTab === 'instructions' && styles.activeTabText]}>
              Инструкции
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'ingredients' ? (
          <View style={styles.ingredientsSection}>
            <Text style={styles.sectionTitle}>Ингредиенты ({recipe.ingredients.length})</Text>

            <View style={styles.ingredientsList}>
              {recipe.ingredients.map((item, index) => (
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
            <Text style={styles.sectionTitle}>Пошаговая инструкция</Text>

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
          <PrimaryButton
            title="Смотреть видео рецепт"
            onPress={handleOpenYoutube}
            disabled={false}
          />
        )}
      </View>
    </Animated.ScrollView>
  );
}
