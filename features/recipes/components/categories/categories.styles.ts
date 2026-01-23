import { IColorsTheme, IFontSize, IIndents } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: fontSize.l,
      fontFamily: 'MontserratBold',
      marginBottom: indets.s,
      marginLeft: indets.m,
    },
    scrollContent: {
      paddingHorizontal: indets.m,
    },
    categoryButton: {
      paddingHorizontal: indets.m,
      paddingVertical: indets.xs,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 20,
      marginRight: indets.xs,
      minHeight: 36,
      justifyContent: 'center',
    },
    activeCategoryButton: {
      backgroundColor: colors.primary,
    },
    categoryText: {
      color: colors.text.secondary,
      fontSize: indets.s,
      fontFamily: 'Montserrat',
    },
    activeCategoryText: {
      color: colors.activeCategory,
      fontFamily: 'Montserrat',
    },
  });
