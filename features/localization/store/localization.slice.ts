import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from '../types';

const initialState: LanguageState = {
  currentLanguage: 'en',
  languageLoading: false,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
    setLanguageLoading: (state, action: PayloadAction<boolean>) => {
      state.languageLoading = action.payload;
    },
  },
});

export const { setLanguage, setLanguageLoading } = languageSlice.actions;
export default languageSlice.reducer;
