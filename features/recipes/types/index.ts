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
  strCategory?: string;
  strArea?: string;
}

export interface ICategory {
  strCategory: string;
}

export interface RecipeDetail {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube?: string;
  strTags?: string;
  ingredients: {
    ingredient: string;
    measure: string;
  }[];
  [key: `strIngredient${number}`]: string | undefined;
  [key: `strMeasure${number}`]: string | undefined;
}

export interface RecipeInfoState {
  recipe: RecipeDetail | null;
  recipeLoading: boolean;
  recipeError: string | null;
}

export interface RecipeSearchState {
  searchedRecipes: RecipesList | null;
  searchRecipesLoading: boolean;
  searchRecipesErorr: string | null;
  hasSearched: boolean;
}

export interface FavoritesRecipesState {
  favoritesRecipes: RecipesList | null;
  favoritesRecipesLoading: boolean;
  favoritesRecipesErorr: string | null;
}
