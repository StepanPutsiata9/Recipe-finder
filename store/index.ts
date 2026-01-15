import localizationReducer from '@/features/localization/store/localization.slice';
import themeReducer from '@/features/theme/store/theme.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    localization: localizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
