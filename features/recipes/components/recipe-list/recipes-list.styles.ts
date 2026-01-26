import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, indets } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: indets.m,
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: indets.l,
      fontFamily: fontFamily.bold,
      marginBottom: indets.s,
    },
  });
};
