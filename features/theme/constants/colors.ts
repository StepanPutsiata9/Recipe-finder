import { IColorsTheme } from '../types';

export const darkTheme: IColorsTheme = {
  primary: '#FF6E41',
  primaryGradient: {
    start: '#ff9900',
    end: '#FFB412',
  },
  primaryButtonText: '#ffffff',
  background: '#090D19',
  text: {
    primary: '#fff',
    secondary: '#E0E1E3',
  },
  inputBackground: '#090D19',
  error: '#FF1B44',
  tabbarBackground: '#2b2b2b',
} as const;

export const lightTheme: IColorsTheme = {
  primary: '#FF6E41',
  primaryGradient: {
    start: '#FF6E41',
    end: '#FF602E',
  },
  primaryButtonText: '#ffffff',
  background: '#ffffff',
  text: {
    primary: '#000000',
    secondary: '#A9A9A9',
  },
  inputBackground: '#F5F5F5',
  error: '#FF1B44',
  tabbarBackground: '##FFF5F2',
} as const;
