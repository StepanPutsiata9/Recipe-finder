import { IColorsTheme, IFontSize, IIndents } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = (colors: IColorsTheme, indents: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
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
      fontFamily: 'Montserrat',
      color: colors.text.primary,
      paddingHorizontal: indents.l,
      paddingVertical: 0,
      height: '100%',
      includeFontPadding: false,
    },
    eyeButton: {
      paddingHorizontal: indents.m,
      height: '100%',
      justifyContent: 'center',
    },
    errorText: {
      fontSize: fontSize.xs,
      fontFamily: 'Montserrat',
      color: colors.error,
      marginTop: 4,
      marginLeft: indents.l,
    },
  });
