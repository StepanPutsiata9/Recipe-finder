import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: indets.m,
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xxl,
      fontFamily: fontFamily.medium,
      marginBottom: indets.l,
    },
  });
};

export default useStyles;
