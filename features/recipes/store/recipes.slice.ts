import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRecipes } from '../services';
import { RecipesList, RecipesState } from '../types';

const initialState: RecipesState = {
  recipes: null,
  recipesLoading: false,
  recipesErorr: null,
  activeCategory: 'Beef',
};
export const loadRecipes = createAsyncThunk<RecipesList, string, { rejectValue: string }>(
  'recipes/loadInitialRecipes',
  async (category: string, { rejectWithValue }) => {
    try {
      const initialRecipes = await getRecipes(category);
      return initialRecipes;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.recipesLoading = action.payload;
    },
    setError(state, action) {
      state.recipesErorr = action.payload;
    },
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipes.pending, (state) => {
        state.recipesLoading = true;
      })
      .addCase(loadRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.recipesLoading = false;
      })
      .addCase(loadRecipes.rejected, (state) => {
        state.recipes = null;
        state.recipesLoading = false;
      });
  },
});

export const { setLoading, setError, setActiveCategory } = recipesSlice.actions;
export default recipesSlice.reducer;
