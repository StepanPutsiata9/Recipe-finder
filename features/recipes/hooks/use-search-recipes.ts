import { useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { clearSearchedRecipes as clearData, seacrhRecipes } from '../store/recipe-search.slice';

export const useSearchRecipes = () => {
  const dispatch = useAppDispatch();
  const { searchedRecipes, searchRecipesLoading, searchRecipesErorr, hasSearched } = useAppSelector(
    (state) => state.searchRecipe
  );
  const debounceRef = useRef<number | null>(null);

  const handleSearch = useCallback(
    (query: string): void => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        if (query.trim() === '') {
          dispatch(clearData());
        } else {
          dispatch(seacrhRecipes(query));
        }
      }, 300);
    },
    [dispatch]
  );
  const clearSearchedRecipes = (): void => {
    dispatch(clearData());
  };
  return {
    searchedRecipes,
    searchRecipesLoading,
    searchRecipesErorr,
    handleSearch,
    clearSearchedRecipes,
    hasSearched,
  };
};
