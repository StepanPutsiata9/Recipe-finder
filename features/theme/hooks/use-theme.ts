import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { darkTheme, IColorsTheme, lightTheme, loadingColors } from '@/styles';
import { useMemo } from 'react';
import { getTheme, storeTheme } from '../storage';
import { setTheme, toggleTheme } from '../store/theme.slice';
import { ThemeMode } from '../types';

export const useTheme = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const colors: IColorsTheme = useMemo((): IColorsTheme => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [mode]);

  const isDark = mode === 'dark';
  const isLight = mode === 'light';
  const handleToggleTheme = async (): Promise<void> => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    await storeTheme(newTheme);
    dispatch(toggleTheme());
  };
  const handleSetTheme = async (theme: ThemeMode): Promise<void> => {
    await storeTheme(theme);
    dispatch(setTheme(theme));
  };
  const loadTheme = async (): Promise<void> => {
    try {
      const theme = await getTheme();
      handleSetTheme(theme ?? 'light');
    } catch {
      await handleSetTheme('light');
    }
  };
  return {
    mode,
    colors,
    isDark,
    isLight,
    handleToggleTheme,
    loadTheme,
    loadingColors: loadingColors,
  };
};
