import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadFavoritesRecipes as loadData } from '../store/recipe-favorites.slice';

export const useFavoritesRecipes = () => {
  const { favoritesRecipes, favoritesRecipesErorr, favoritesRecipesLoading } = useAppSelector(
    (state) => state.favoritesRecipes
  );
  const dispatch = useAppDispatch();
  const loadFavoritesRecipes = (): void => {
    dispatch(loadData());
  };
  return {
    loadFavoritesRecipes,
    favoritesRecipesLoading,
    favoritesRecipesErorr,
    favoritesRecipes,
  };
};
