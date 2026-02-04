import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: fontSize.l,
      fontFamily: fontFamily.bold,
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
      fontFamily: fontFamily.medium,
    },
    activeCategoryText: {
      color: colors.activeCategory,
      fontFamily: fontFamily.medium,
    },
  });
};
