import { IColorsTheme, useTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
}

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text.primary,
      fontSize: 20,
      fontFamily: 'Montserrat',
    },
  });
