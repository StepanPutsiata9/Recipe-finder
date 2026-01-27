export interface RecipesState {
  recipes: RecipesList | null;
  recipesLoading: boolean;
  recipesErorr: string | null;
  activeCategory: string;
  categories: ICategory[] | null;
}

export type RecipesList = RecipeItem[];
export interface RecipeItem {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface ICategory {
  strCategory: string;
}
