import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    content: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: indets.m,
      paddingBottom: indets.xxl,
      borderTopLeftRadius: 20,
      borderTopEndRadius: 20,
      marginTop: -15,
    },
  });
};

export default useStyles;
