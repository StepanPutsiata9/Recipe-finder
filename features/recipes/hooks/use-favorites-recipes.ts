import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { isFavorite } from '../storage';
import {
  loadFavoritesRecipes as loadData,
  setIsFavoriteLoading,
  toggleRecipe,
} from '../store/recipe-favorites.slice';
import { RecipeDetail } from '../types';

export const useFavoritesRecipes = () => {
  const {
    favoritesRecipes,
    favoritesRecipesErorr,
    favoritesRecipesLoading,
    isFavoriteCheckingLoading,
  } = useAppSelector((state) => state.favoritesRecipes);
  const dispatch = useAppDispatch();
  const [isFavoriteValue, setIsFavoriteValue] = useState(false);
  const loadFavoritesRecipes = (): void => {
    dispatch(loadData());
  };
  const toggleFavoriteRecipe = (recipe: RecipeDetail): void => {
    dispatch(toggleRecipe(recipe));
  };
  const checkIsFavorite = async (id: string): Promise<void> => {
    dispatch(setIsFavoriteLoading(true));
    const checkFavorite = await isFavorite(id);
    setIsFavoriteValue(checkFavorite);
    dispatch(setIsFavoriteLoading(false));
  };
  return {
    loadFavoritesRecipes,
    favoritesRecipesLoading,
    favoritesRecipesErorr,
    favoritesRecipes,
    toggleFavoriteRecipe,
    checkIsFavorite,
    isFavoriteCheckingLoading,
    setIsFavoriteValue,
    isFavoriteValue,
  };
};
