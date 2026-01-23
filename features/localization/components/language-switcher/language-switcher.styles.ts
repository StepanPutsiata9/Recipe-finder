import { IColorsTheme, IFontSize, IIndents } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    floatingButton: {
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      paddingHorizontal: indets.m,
      paddingVertical: indets.m,
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    buttonTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: indets.xs,
    },
    buttonLanguageCode: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.primary,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: indets.m,
    },
    modalCard: {
      backgroundColor: colors.background,
      borderRadius: 24,
      width: '100%',
      maxWidth: 320,
      padding: indets.xl,
    },
    modalHeader: {
      alignItems: 'center',
      marginBottom: indets.xl,
    },
    modalTitle: {
      fontSize: fontSize.xl,
      fontFamily: 'MontserratBold',
      color: colors.text.primary,
      marginTop: indets.s,
      marginBottom: indets.m,
    },
    gradientLine: {
      height: 2,
      width: 40,
      backgroundColor: colors.primary,
      borderRadius: 1,
      opacity: 0.8,
    },

    languagesList: {
      gap: indets.s,
      marginBottom: indets.xl,
    },
    languageItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: indets.m,
      borderRadius: 16,
      backgroundColor: colors.secondaryButtonBackground,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    languageItemActive: {
      backgroundColor: colors.primary + '15',
      borderColor: colors.primary,
    },
    languageItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    languageName: {
      fontSize: indets.m,
      fontFamily: 'Montserrat',
      color: colors.text.primary,
    },
    languageNameActive: {
      color: colors.primary,
      fontFamily: 'MontserratBold',
    },
  });
