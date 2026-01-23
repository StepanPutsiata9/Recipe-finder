import { IColorsTheme, IFontSize, IIndents } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: indets.m,
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: indets.l,
      fontFamily: 'MontserratBold',
      marginBottom: indets.s,
    },
  });
