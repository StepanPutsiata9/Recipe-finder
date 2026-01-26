import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: fontSize.xl,
      fontFamily: 'MontserratBold',
      color: colors.text.primary,
      marginBottom: indets.m,
      paddingHorizontal: indets.m,
    },
    listContent: {
      paddingHorizontal: indets.m,
      paddingBottom: indets.xl,
    },
  });
};
