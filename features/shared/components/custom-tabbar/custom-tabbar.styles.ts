import { useTheme } from '@/features/theme/hooks';
import { fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.tabbarBackground,
      width: '80%',
      alignSelf: 'center',
      borderRadius: 40,
      paddingVertical: indets.s,
      paddingHorizontal: 0,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    tabItem: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      paddingHorizontal: indets.m,
      borderRadius: 30,
      minWidth: 60,
    },
    activeTabItem: {
      backgroundColor: colors.primary,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    text: {
      color: colors.tabbarActiveText,
      fontSize: fontSize.s,
      marginLeft: 8,
      fontFamily: 'Montserrat',
      fontWeight: '600',
    },
  });
};
