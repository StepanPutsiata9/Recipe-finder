import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
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
  });
};

export default useStyles;
