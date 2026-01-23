import { IFontSize, ILoadingColors } from '@/styles';
import { StyleSheet } from 'react-native';
export const useStyles = (loadingColors: ILoadingColors, fontSize: IFontSize) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: loadingColors.background,
    },
    animation: { width: 200, height: 200 },
    text: {
      fontSize: fontSize.l,
      color: loadingColors.text,
      fontFamily: 'MontserratBold',
    },
  });
