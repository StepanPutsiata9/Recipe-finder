import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      marginBottom: indets.xl,
      borderBottomWidth: 1,
      paddingBottom: indets.s,
      borderColor: colors.placeholder,
    },
    imageContainer: {
      width: 78,
      height: 78,
      overflow: 'hidden',
      borderRadius: 16,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'space-between',
      marginLeft: indets.m,
    },
    mainInfo: {
      flex: 1,
    },
    mealName: {
      color: colors.text.primary,
      fontSize: fontSize.l,
      fontFamily: 'MontserratBold',
      marginBottom: indets.xs,
      lineHeight: 22,
    },
    detailsRow: {
      flexDirection: 'column',
    },
    detailTag: {
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
      paddingVertical: 1,
    },
    categoryTag: {
      backgroundColor: 'rgba(255, 165, 0, 0.1)',
      borderColor: 'rgba(255, 165, 0, 0.3)',
    },
    detailText: {
      color: colors.text.primary,
      fontSize: fontSize.xs,
      fontFamily: 'Montserrat',
      letterSpacing: 0.3,
    },
    categoryText: {
      color: colors.placeholder,
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    viewText: {
      color: colors.text.secondary,
      fontSize: indets.s,
      fontFamily: 'Montserrat',
      marginRight: indets.xs,
    },
    arrowContainer: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: 'rgba(255, 99, 71, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
