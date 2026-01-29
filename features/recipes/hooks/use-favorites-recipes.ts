import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadFavoritesRecipes as loadData } from '../store/recipe-favorites.slice';

export const useFavoritesRecipes = () => {
  const { favoritesRecipes, favoritesRecipesErorr, favoritesRecipesLoading } = useAppSelector(
    (state) => state.favoritesRecipes
  );
  const dispatch = useAppDispatch();
  const loadRecipes = (): void => {
    dispatch(loadData());
  };
  return {
    loadRecipes,
    favoritesRecipesLoading,
    favoritesRecipesErorr,
    favoritesRecipes,
  };
};
