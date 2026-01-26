import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    errorText: {
      fontSize: fontSize.m,
      color: colors.error,
      fontFamily: fontFamily.regular,
      textAlign: 'center',
    },
  });
};
