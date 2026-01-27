import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    loadingText: {
      marginTop: indets.m,
      fontSize: fontSize.m,
      color: colors.text.secondary,
      fontFamily: fontFamily.medium,
    },

    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: indets.xl,
    },
    errorText: {
      marginTop: indets.m,
      fontSize: fontSize.l,
      color: colors.text.primary,
      fontFamily: fontFamily.bold,
      textAlign: 'center',
    },

    header: {
      height: 300,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      paddingTop: 50,
      paddingHorizontal: indets.m,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 4,
    },
    headerActions: {
      flexDirection: 'row',
      gap: indets.s,
      marginTop: 4,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: indets.m,
      paddingBottom: indets.xxl,
      borderTopLeftRadius: 20,
      borderTopEndRadius: 20,
      marginTop: -15,
    },

    mainInfo: {
      paddingTop: indets.xl,
      paddingBottom: indets.m,
    },
    recipeTitle: {
      fontSize: fontSize.xl,
      fontFamily: fontFamily.bold,
      color: colors.text.primary,
      marginBottom: indets.m,
      lineHeight: 36,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: indets.s,
    },
    tag: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: indets.m,
      paddingVertical: indets.xs,
      backgroundColor: colors.primary + '15',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.primary + '30',
    },
    tagText: {
      fontSize: fontSize.s,
      fontFamily: fontFamily.medium,
      color: colors.primary,
    },

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
