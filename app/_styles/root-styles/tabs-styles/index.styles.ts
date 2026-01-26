import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
};
export default useStyles;
