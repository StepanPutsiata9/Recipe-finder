import { api } from '@/api';

import { ICategory } from '../types';

export const getCategories = async () => {
  const { data } = await api.get('list.php?c=list');
  const categories = data.meals as ICategory[];
  return categories;
};
