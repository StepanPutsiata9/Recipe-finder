export interface IColorsTheme {
  primary: string;
  primaryGradient: {
    start: string;
    end: string;
  };
  primaryButtonText: string;
  secondaryButtonBackground: string;
  secondaryButtonBorder: string;
  background: string;
  text: {
    primary: string;
    secondary: string;
  };

  inputBackground: string;
  error: string;
  tabbarBackground: string;
  tabbarActiveText: string;
  switchColors: {
    thumbColor: string;
    ios_backgroundColor: string;
  };
  placeholder: string;
}
export type ThemeMode = 'light' | 'dark';

export interface IThemeState {
  mode: ThemeMode;
}
