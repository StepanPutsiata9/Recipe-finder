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
  trackFalse: string;
  trackTrue: string;
  placeholder: string;
  activeCategory: string;
}
export interface ILoadingColors {
  text: string;
  background: string;
}
