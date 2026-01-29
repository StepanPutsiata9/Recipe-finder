import AsyncStorage from '@react-native-async-storage/async-storage';

import { RecipeDetail } from '../types';

const FAVORITES_KEY = 'favorites_recipes';

export const toggleFavoriteRecipe = async (recipe: RecipeDetail): Promise<boolean> => {
  const favorites = await getFavoriteRecipes();
  const isExists = favorites.some((item) => item.idMeal === recipe.idMeal);

  const updatedFavorites = isExists
    ? favorites.filter((item) => item.idMeal !== recipe.idMeal)
    : [...favorites, recipe];

  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  return isExists;
};

export const getFavoriteRecipes = async (): Promise<RecipeDetail[]> => {
  const data = await AsyncStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const isFavorite = async (recipeId: string): Promise<boolean> => {
  const favorites = await getFavoriteRecipes();
  return favorites.some((item) => item.idMeal === recipeId);
};
