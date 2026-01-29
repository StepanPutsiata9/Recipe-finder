import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: indets.m,
    },
  });
};
export default useStyles;
