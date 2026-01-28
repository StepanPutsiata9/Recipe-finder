import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getSearchedRecipes } from '../services';
import { RecipeSearchState, RecipesList } from '../types';

const initialState: RecipeSearchState = {
  searchedRecipes: null,
  searchRecipesLoading: false,
  searchRecipesErorr: null,
};
export const seacrhRecipes = createAsyncThunk<RecipesList, string, { rejectValue: string }>(
  'recipe/seacrhRecipes',
  async (query: string, { rejectWithValue }) => {
    try {
      const searchedRecipes = await getSearchedRecipes(query);
      return searchedRecipes;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const recipeSearchSlice = createSlice({
  name: 'recipe-search',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.searchRecipesLoading = action.payload;
    },
    setError(state, action) {
      state.searchRecipesErorr = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(seacrhRecipes.pending, (state) => {
        state.searchRecipesLoading = true;
      })
      .addCase(seacrhRecipes.fulfilled, (state, action) => {
        state.searchedRecipes = action.payload;
        state.searchRecipesLoading = false;
      })
      .addCase(seacrhRecipes.rejected, (state) => {
        state.searchedRecipes = null;
        state.searchRecipesLoading = false;
      });
  },
});

export const { setLoading, setError } = recipeSearchSlice.actions;
export default recipeSearchSlice.reducer;
