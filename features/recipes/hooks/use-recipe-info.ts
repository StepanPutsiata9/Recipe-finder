import { useState } from 'react';
import { Linking } from 'react-native';
import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadRecipeInfo as loadData } from '../store/recipe-info.slice';
import { RecipeDetail } from '../types';

export const useRecipeInfo = () => {
  const { recipe, recipeError, recipeLoading } = useAppSelector((state) => state.recipeInfo);
  const dispatch = useAppDispatch();

  const handleOpenYoutube = () => {
    if (recipe?.strYoutube) {
      Linking.openURL(recipe.strYoutube);
    }
  };
  const loadRecipeInfo = (id: string): void => {
    dispatch(loadData(id));
  };
  const extractIngredients = (meal: RecipeDetail) => {
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
  const scrollY = useSharedValue(0);
  const tabAnimation = useSharedValue(0);
  const [tabContainerWidth, setTabContainerWidth] = useState(0);
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
  const animatedTabStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(tabAnimation.value * (tabContainerWidth / 2), { duration: 300 }) },
      ],
    };
  });
  return {
    recipe,
    recipeError,
    recipeLoading,
    loadRecipeInfo,
    extractIngredients,
    scrollHandler,
    imageAnimationStyle,
    animatedTabStyle,
    tabAnimation,
    scrollY,
    setTabContainerWidth,
    handleOpenYoutube,
  };
};
