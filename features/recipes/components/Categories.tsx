import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';

interface ICategories {
  colors: IColorsTheme;
}
export const Categories = ({ colors }: ICategories) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
    </View>
  );
};
const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    title: {
      color: colors.text.primary,
      fontSize: 18,
      fontFamily: 'MontserratBold',
    },
  });
