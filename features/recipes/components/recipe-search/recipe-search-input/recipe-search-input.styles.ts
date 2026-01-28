import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      borderRadius: 32,
      backgroundColor: colors.inputBackground,
      borderWidth: 1,
      borderColor: 'transparent',
      overflow: 'hidden',
      marginBottom: indets.xl,
    },
    input: {
      flex: 1,
      fontSize: fontSize.m,
      fontFamily: fontFamily.medium,
      color: colors.text.primary,
      paddingLeft: indets.xxl + 12,
      paddingRight: indets.xxl,
      paddingVertical: 0,
      height: '100%',
      includeFontPadding: false,
    },
    icon: {
      position: 'absolute',
      right: 0,
      left: 10,
      bottom: 0,
      top: 0,
      height: '100%',
      justifyContent: 'center',
    },
    clearButton: {
      position: 'absolute',
      right: 10,
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
  });
};
