import { useTheme } from '@/features/theme/hooks';
import { fontFamily, fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
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
    },
    errorContainer: {
      borderColor: colors.error,
    },
    textInput: {
      flex: 1,
      fontSize: fontSize.l,
      fontFamily: fontFamily.medium,
      color: colors.text.primary,
      paddingHorizontal: indets.l,
      paddingVertical: 0,
      height: '100%',
      includeFontPadding: false,
    },
    eyeButton: {
      paddingHorizontal: indets.m,
      height: '100%',
      justifyContent: 'center',
    },
    errorText: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.medium,
      color: colors.error,
      marginTop: 4,
      marginLeft: indets.l,
    },
  });
};
