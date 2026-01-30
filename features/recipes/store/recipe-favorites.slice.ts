import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getFavoriteRecipes, toggleFavoriteRecipe } from '../storage';
import { FavoritesRecipesState, RecipeDetail, RecipesList } from '../types';

const initialState: FavoritesRecipesState = {
  favoritesRecipes: null,
  favoritesRecipesLoading: false,
  isFavoriteCheckingLoading: false,
  favoritesRecipesErorr: null,
};
export const loadFavoritesRecipes = createAsyncThunk<RecipesList, void>(
  'recipe-favorites/loadFavoritesRecipes',
  async (_, { rejectWithValue }) => {
    try {
      const favoritesRecipes = await getFavoriteRecipes();
      return favoritesRecipes;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

export const toggleRecipe = createAsyncThunk<RecipesList, RecipeDetail>(
  'recipe-favorites/toggleRecipe',
  async (recipe: RecipeDetail, { rejectWithValue }) => {
    try {
      await toggleFavoriteRecipe(recipe);
      const favoritesRecipes = await getFavoriteRecipes();
      return favoritesRecipes;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const favoritesRecipesSlice = createSlice({
  name: 'recipe-favorites',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.favoritesRecipesLoading = action.payload;
    },
    setIsFavoriteLoading(state, action) {
      state.isFavoriteCheckingLoading = action.payload;
    },
    setError(state, action) {
      state.favoritesRecipesErorr = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavoritesRecipes.pending, (state) => {
        state.favoritesRecipesLoading = true;
      })
      .addCase(loadFavoritesRecipes.fulfilled, (state, action) => {
        state.favoritesRecipes = action.payload;
        state.favoritesRecipesLoading = false;
      })
      .addCase(loadFavoritesRecipes.rejected, (state) => {
        state.favoritesRecipes = null;
        state.favoritesRecipesLoading = false;
      })

      .addCase(toggleRecipe.pending, (state) => {
        state.favoritesRecipesLoading = true;
      })
      .addCase(toggleRecipe.fulfilled, (state, action) => {
        state.favoritesRecipes = action.payload;
        state.favoritesRecipesLoading = false;
      })
      .addCase(toggleRecipe.rejected, (state) => {
        state.favoritesRecipes = null;
        state.favoritesRecipesLoading = false;
      });
  },
});

export const { setLoading, setError, setIsFavoriteLoading } = favoritesRecipesSlice.actions;
export default favoritesRecipesSlice.reducer;
