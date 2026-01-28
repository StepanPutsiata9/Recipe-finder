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
      alignItems: 'center',
    },
    emptyText: {
      fontFamily: fontFamily.regular,
      color: colors.text.primary,
      fontSize: fontSize.l,
    },
    animation: { width: 350, height: 400 },
  });
};
