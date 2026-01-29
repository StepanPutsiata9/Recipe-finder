import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadFavoritesRecipes as loadData, toggleRecipe } from '../store/recipe-favorites.slice';
import { RecipeDetail } from '../types';

export const useFavoritesRecipes = () => {
  const { favoritesRecipes, favoritesRecipesErorr, favoritesRecipesLoading } = useAppSelector(
    (state) => state.favoritesRecipes
  );
  const dispatch = useAppDispatch();
  const loadFavoritesRecipes = (): void => {
    dispatch(loadData());
  };
  const toggleFavoriteRecipe = (recipe: RecipeDetail): void => {
    dispatch(toggleRecipe(recipe));
  };
  const checkIsFavorite = (): boolean => {
    return true;
  };
  return {
    loadFavoritesRecipes,
    favoritesRecipesLoading,
    favoritesRecipesErorr,
    favoritesRecipes,
    toggleFavoriteRecipe,
    checkIsFavorite,
  };
};
