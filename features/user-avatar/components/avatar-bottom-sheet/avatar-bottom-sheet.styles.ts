import { IColorsTheme, IFontSize, IIndents } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      paddingHorizontal: indets.l,
      paddingTop: indets.s,
      zIndex: 9999,
    },
    handleIndicator: {
      backgroundColor: colors.placeholder,
      width: 40,
      height: 4,
      borderRadius: 2,
    },
    bottomSheetBackground: {
      backgroundColor: colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalTitle: {
      fontSize: indets.l,
      fontFamily: 'MontserratBold',
      color: colors.text.primary,
      textAlign: 'center',
      marginBottom: indets.l,
    },
    avatarContainer: {
      alignItems: 'center',
      marginVertical: indets.l,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: colors.secondaryButtonBorder,
    },
    avatarPlaceholder: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: colors.secondaryButtonBorder,
    },
    modalOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: indets.m,
      paddingHorizontal: indets.l,
      borderRadius: 16,
      marginBottom: indets.m,
      backgroundColor: 'rgba(255, 110, 65, 0.05)',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    modalOptionText: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.primary,
      flex: 1,
      marginLeft: indets.s,
    },
    cancelOption: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      justifyContent: 'center',
    },
    cancelText: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.placeholder,
      textAlign: 'center',
    },
  });
