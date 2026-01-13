export interface IColorsTheme {
  primary: string;
  primaryGradient: {
    start: string;
    end: string;
  };
  background: string;
  text: {
    primary: string;
    secondary: string;
  };
  inputBackground: string;
  error: string;
  tabbarBackground: string;
}

export interface IThemeState {
  mode: 'light' | 'dark';
}
export type ThemeMode = 'light' | 'dark';
