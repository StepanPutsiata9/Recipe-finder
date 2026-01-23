import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
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
      fontFamily: 'Montserrat',
      textAlign: 'center',
    },
  });
};
