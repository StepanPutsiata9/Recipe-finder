import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    button: {
      paddingVertical: indets.m,
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    buttonText: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.primary,
      marginRight: indets.s,
    },
  });
};
