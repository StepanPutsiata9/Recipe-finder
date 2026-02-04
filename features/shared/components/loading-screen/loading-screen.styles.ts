import { StyleSheet } from 'react-native';

import { loadingColors } from '@/styles';

export const useStyles = () => {
  return StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: loadingColors.background,
    },
    animation: { width: 150, height: 150 },
  });
};
