import { useTheme } from '@/features/theme';
import { indets } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: indets.m,
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: indets.l,
      fontFamily: 'MontserratBold',
      marginBottom: indets.s,
    },
  });
};
