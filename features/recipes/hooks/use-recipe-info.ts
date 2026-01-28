import { useState } from 'react';
import { Linking } from 'react-native';

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
  const ingredients = recipe ? extractIngredients(recipe) : [];
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return {
    recipe,
    recipeError,
    recipeLoading,
    loadRecipeInfo,
    ingredients,
    handleOpenYoutube,
    toggleFavorite,
    isFavorite,
  };
};
