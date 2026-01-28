import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    animation: {
      width: 100,
      height: 100,
    },
  });
};
