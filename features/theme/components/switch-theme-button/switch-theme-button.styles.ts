import { Platform, StyleSheet } from 'react-native';

import { fontFamily, IColorsTheme, IFontSize, IIndents } from '@/styles';

export const createStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: indets.m,
      paddingVertical: indets.m,
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: indets.s,
    },
    text: {
      fontSize: fontSize.m,
      fontFamily: fontFamily.bold,
      color: colors.text.secondary,
      letterSpacing: 1.2,
    },
    switchWrapper: {
      ...Platform.select({
        android: {
          marginVertical: -10,
        },
        ios: {},
      }),
    },
  });
