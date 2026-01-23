import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: indets.m,
      justifyContent: 'center',
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xl,
      textAlign: 'center',
      fontFamily: 'Montserrat',
      marginBottom: indets.xl,
    },
    banner: {
      alignItems: 'center',
      marginBottom: indets.xl,
    },
    inputsContainer: {
      width: '100%',
      marginBottom: indets.xl,
      gap: indets.s,
    },
    buttonContainer: {
      marginBottom: indets.xl,
    },
    link: {
      fontFamily: 'Montserrat',
      fontSize: fontSize.s,
      textAlign: 'center',
      color: colors.text.secondary,
    },
    signInText: {
      color: colors.primary,
    },
  });
};
