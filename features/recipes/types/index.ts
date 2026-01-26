export interface RecipesState {
  recipes: RecipesList | null;
  recipesLoading: boolean;
  recipesErorr: string | null;
  activeCategory: string;
}

export type RecipesList = RecipeItem[];
export interface RecipeItem {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
