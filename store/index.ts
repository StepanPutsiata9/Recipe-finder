import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@/features/auth/store/auth.slice';
import localizationReducer from '@/features/localization/store/localization.slice';
import favoritesRecipesReducer from '@/features/recipes/store/recipe-favorites.slice';
import recipeInfoReducer from '@/features/recipes/store/recipe-info.slice';
import recipeSearchReducer from '@/features/recipes/store/recipe-search.slice';
import recipesReducer from '@/features/recipes/store/recipes.slice';
import themeReducer from '@/features/theme/store/theme.slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    localization: localizationReducer,
    auth: authReducer,
    recipes: recipesReducer,
    recipeInfo: recipeInfoReducer,
    searchRecipe: recipeSearchReducer,
    favoritesRecipes: favoritesRecipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
