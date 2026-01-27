import { api } from '@/api';

import { RecipeDetail } from '../types';

export const getRecipeInfo = async (id: string) => {
  const { data } = await api.get(`lookup.php?i=${id}`);
  const recipe = data.meals[0] as RecipeDetail;
  return recipe;
};
