import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    emptyContainer: {
      marginTop: 30,
      alignItems: 'center',
    },
    emptyText: {
      fontFamily: fontFamily.regular,
      color: colors.text.primary,
      fontSize: fontSize.l,
    },
  });
};
