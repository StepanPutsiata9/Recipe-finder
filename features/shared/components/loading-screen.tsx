import { useTheme } from '@/features/theme';
import { ILoadingColors } from '@/styles';
import LottieView from 'lottie-react-native';
import { JSX } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export function LoadingScreen(): JSX.Element {
  const { loadingColors } = useTheme();
  const styles = useStyles(loadingColors);
  return (
    <SafeAreaView style={styles.modalContainer}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require('@/assets/animations/loader.json')}
      />
      <Text style={styles.text}>Recipe Finder</Text>
    </SafeAreaView>
  );
}
const useStyles = (loadingColors: ILoadingColors) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: loadingColors.background,
    },
    animation: { width: 200, height: 200 },
    text: {
      fontSize: 22,
      color: loadingColors.text,
      fontFamily: 'MontserratBold',
    },
  });
