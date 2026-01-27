import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadRecipeInfo as loadData } from '../store/recipe-info.slice';

export const useRecipeInfo = () => {
  const { recipe, recipeError, recipeLoading } = useAppSelector((state) => state.recipeInfo);
  const dispatch = useAppDispatch();

  const loadRecipeInfo = (id: string): void => {
    dispatch(loadData(id));
  };

  return {
    recipe,
    recipeError,
    recipeLoading,
    loadRecipeInfo,
  };
};
