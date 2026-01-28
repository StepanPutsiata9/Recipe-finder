import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRecipeInfo } from '../services';
import { RecipeDetail, RecipeInfoState } from '../types';

const initialState: RecipeInfoState = {
  recipe: null,
  recipeLoading: false,
  recipeError: null,
};
export const loadRecipeInfo = createAsyncThunk<RecipeDetail, string, { rejectValue: string }>(
  'recipe/loadRecipeInfo',
  async (id: string, { rejectWithValue }) => {
    try {
      const recipeInfo = await getRecipeInfo(id);
      return recipeInfo;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const recipeInfoSlice = createSlice({
  name: 'recipe-info',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.recipeLoading = action.payload;
    },
    setError(state, action) {
      state.recipeError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipeInfo.pending, (state) => {
        state.recipeLoading = true;
      })
      .addCase(loadRecipeInfo.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.recipeLoading = false;
      })
      .addCase(loadRecipeInfo.rejected, (state) => {
        state.recipe = null;
        state.recipeLoading = false;
      });
  },
});

export const { setLoading, setError } = recipeInfoSlice.actions;
export default recipeInfoSlice.reducer;
