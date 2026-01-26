import { StyleSheet } from 'react-native';

import { useTheme } from '@/features/theme';
import { fontFamily, fontSize, indets } from '@/styles';

export const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: indets.m,
      paddingHorizontal: 16,
    },
    greetView: {
      flexDirection: 'row',
      gap: indets.s,
      alignItems: 'center',
    },
    helloText: {
      color: colors.text.primary,
      fontFamily: fontFamily.medium,
      fontSize: fontSize.l,
      letterSpacing: 1.3,
    },
    nameView: {},
    nameText: {
      fontSize: fontSize.l,
      fontFamily: fontFamily.bold,
      color: colors.text.primary,
    },
    avatarPlaceholder: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    placeholder: {
      width: 35,
      height: 35,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    functionsBlock: {
      flexDirection: 'row',
      gap: indets.s,
    },
  });
};
