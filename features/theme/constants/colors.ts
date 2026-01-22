import { IColorsTheme, ILoadingColors } from '../types';

export const loadingColors: ILoadingColors = {
  background: '#f9beac',
  text: '#fff',
};
export const darkTheme: IColorsTheme = {
  primary: '#FF6E41',
  primaryGradient: {
    start: '#ff9900',
    end: '#FFB412',
  },
  primaryButtonText: '#ffffff',
  secondaryButtonBackground: '#ff6e410d',
  secondaryButtonBorder: '#FFE5DC',
  background: '#090D19',
  text: {
    primary: '#fff',
    secondary: '#E0E1E3',
  },
  inputBackground: '#161C2C',
  error: '#FF1B44',
  tabbarBackground: '#080c16',
  tabbarActiveText: '#fff',
  switchColors: {
    thumbColor: '#fff',
    ios_backgroundColor: '#9CA3AF',
  },
  placeholder: '#BBBBBB',
  trackFalse: '#E5E7EB',
  trackTrue: '#FF8C6B',
  activeCategory: '#fff',
} as const;

export const lightTheme: IColorsTheme = {
  primary: '#FF6E41',
  primaryGradient: {
    start: '#FF6E41',
    end: '#FF602E',
  },
  secondaryButtonBackground: '#FFF5F2',
  secondaryButtonBorder: '#FFE5DC',

  primaryButtonText: '#ffffff',
  background: '#ffffff',
  text: {
    primary: '#000000',
    secondary: '#A9A9A9',
  },
  inputBackground: '#F5F5F5',
  error: '#FF1B44',
  tabbarBackground: '#FFF5F2',
  tabbarActiveText: '#fff',
  switchColors: {
    thumbColor: '#FDE68A',
    ios_backgroundColor: '#9CA3AF',
  },
  placeholder: '#BBBBBB',
  trackFalse: '#E5E7EB',
  trackTrue: '#FF8C6B',
  activeCategory: '#fff',
} as const;
