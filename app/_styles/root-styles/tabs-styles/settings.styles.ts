import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: indets.l,
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xl,
      fontFamily: fontFamily.bold,
      letterSpacing: 0.5,
      marginBottom: indets.l,
    },
    buttonsContainer: {
      gap: indets.s,
    },
  });
};
export default useStyles;
