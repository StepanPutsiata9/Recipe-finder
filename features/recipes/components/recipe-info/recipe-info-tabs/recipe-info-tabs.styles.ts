import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      marginHorizontal: indets.l,
      marginBottom: indets.l,
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 30,
      padding: 4,
      position: 'relative',
    },
    activeTabIndicator: {
      position: 'absolute',
      top: 4,
      left: 4,
      width: '48%',
      height: '100%',
      backgroundColor: colors.primary + '15',
      borderRadius: 30,
      zIndex: 0,
    },
    tab: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: indets.xs,
      paddingVertical: indets.m,
      borderRadius: 8,
      zIndex: 1,
    },
    activeTab: {
      backgroundColor: 'transparent',
    },
    tabText: {
      fontSize: fontSize.m,
      fontFamily: fontFamily.medium,
      color: colors.text.secondary,
    },
    activeTabText: {
      color: colors.primary,
    },

    sectionTitle: {
      fontSize: fontSize.xl,
      fontFamily: fontFamily.bold,
      color: colors.text.primary,
      marginBottom: indets.m,
      paddingHorizontal: indets.l,
    },

    ingredientsSection: {
      marginBottom: indets.xl,
    },
    ingredientsList: {
      paddingHorizontal: indets.l,
    },
    ingredientItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: indets.m,
      gap: indets.m,
    },
    ingredientDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.primary,
      marginTop: 8,
    },
    ingredientText: {
      flex: 1,
      fontSize: fontSize.m,
      fontFamily: fontFamily.medium,
      color: colors.text.primary,
      lineHeight: 24,
    },
    measureText: {
      fontFamily: fontFamily.bold,
      color: colors.primary,
    },

    instructionsSection: {
      marginBottom: indets.xl,
    },
    instructionsContent: {
      paddingHorizontal: indets.l,
    },
    stepItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: indets.l,
      gap: indets.m,
    },
    stepNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 4,
    },
    stepNumberText: {
      fontSize: fontSize.s,
      fontFamily: fontFamily.bold,
      color: '#fff',
    },
    stepText: {
      flex: 1,
      fontSize: fontSize.m,
      fontFamily: fontFamily.medium,
      color: colors.text.primary,
      lineHeight: 24,
    },
  });
};

export default useStyles;
