import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getFavoriteRecipes } from '../storage';
import { FavoritesRecipesState, RecipesList } from '../types';

const initialState: FavoritesRecipesState = {
  favoritesRecipes: null,
  favoritesRecipesLoading: false,
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

const favoritesRecipesSlice = createSlice({
  name: 'recipe-favorites',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.favoritesRecipesLoading = action.payload;
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
      });
  },
});

export const { setLoading, setError } = favoritesRecipesSlice.actions;
export default favoritesRecipesSlice.reducer;
