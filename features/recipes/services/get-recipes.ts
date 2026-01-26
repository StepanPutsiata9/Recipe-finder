import { api } from '@/api';

import { RecipesList } from '../types';

export const getRecipes = async (category: string) => {
  const { data } = await api.get(`filter.php?c=${category}`);
  const recipesList = data.meals as RecipesList;
  console.log(recipesList);
  return recipesList;
};
