import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { seacrhRecipes } from '../store/recipe-search.slice';

export const useSearchRecipes = () => {
  const dispatch = useAppDispatch();
  const { searchedRecipes, searchRecipesLoading, searchRecipesErorr } = useAppSelector(
    (state) => state.searchRecipe
  );
  const handleSearch = (query: string): void => {
    dispatch(seacrhRecipes(query));
  };
  return {
    searchedRecipes,
    searchRecipesLoading,
    searchRecipesErorr,
    handleSearch,
  };
};
