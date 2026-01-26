import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadRecipes as loadData, setActiveCategory } from '../store/recipes.slice';

export const useRecipes = () => {
  const { activeCategory, recipesLoading, recipesErorr, recipes } = useAppSelector(
    (state) => state.recipes
  );
  const dispatch = useAppDispatch();
  const handleCategoryChange = (category: string): void => {
    dispatch(setActiveCategory(category));
  };
  const loadRecipes = (category: string): void => {
    dispatch(loadData(category));
  };
  return {
    activeCategory,
    handleCategoryChange,
    loadRecipes,
    recipesLoading,
    recipesErorr,
    recipes,
  };
};
