import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadCategories, loadRecipes as loadData, setActiveCategory } from '../store/recipes.slice';

export const useRecipes = () => {
  const { activeCategory, recipesLoading, recipesErorr, recipes, categories } = useAppSelector(
    (state) => state.recipes
  );
  const dispatch = useAppDispatch();
  const handleCategoryChange = (category: string): void => {
    dispatch(setActiveCategory(category));
  };
  const loadRecipes = (category: string): void => {
    dispatch(loadData(category));
  };
  const initialLoadRecipes = (category: string): void => {
    dispatch(loadCategories());
    dispatch(loadData(category));
  };
  return {
    activeCategory,
    handleCategoryChange,
    loadRecipes,
    recipesLoading,
    recipesErorr,
    recipes,
    initialLoadRecipes,
    categories,
  };
};
