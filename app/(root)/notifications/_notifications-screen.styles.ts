import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: indets.m,
      paddingVertical: indets.s,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xl,
      fontFamily: fontFamily.medium,
    },
    rightPlaceholder: {
      width: 40,
    },
  });
};
export default useStyles;
