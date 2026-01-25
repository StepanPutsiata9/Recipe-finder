import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme/hooks';
import { fontFamily, fontSize, indets } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    gradient: {
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 52,
      width: '100%',
      alignSelf: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: indets.s,
    },
    text: {
      fontSize: fontSize.m,
      color: colors.primaryButtonText,
      fontFamily: fontFamily.medium,
      textAlign: 'center',
    },
  });
};
