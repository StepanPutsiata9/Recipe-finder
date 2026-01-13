import { PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <PrimaryButton title="Войти" onPress={() => {}} />
      </View>
    </>
  );
}

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text.primary,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Montserrat',
      marginBottom: 20,
    },
  });
