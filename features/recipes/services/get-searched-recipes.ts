import { api } from '@/api';

import { RecipesList } from '../types';

export const getSearchedRecipes = async (query: string) => {
  const { data } = await api.get(`search.php?s=${query}`);
  const searchedList = data.meals as RecipesList;
  return searchedList;
};
