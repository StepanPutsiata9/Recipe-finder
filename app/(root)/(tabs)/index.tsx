import { Categories, Header, RecipesList } from '@/features/recipes';
import { useTheme } from '@/features/theme';
import { IColorsTheme } from '@/styles';
import { JSX } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home(): JSX.Element {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const categoriesData = [
    {
      strCategory: 'Beef',
    },
    {
      strCategory: 'Breakfast',
    },
    {
      strCategory: 'Chicken',
    },
    {
      strCategory: 'Dessert',
    },
    {
      strCategory: 'Goat',
    },
    {
      strCategory: 'Lamb',
    },
    {
      strCategory: 'Miscellaneous',
    },
    {
      strCategory: 'Pasta',
    },
    {
      strCategory: 'Pork',
    },
    {
      strCategory: 'Seafood',
    },
    {
      strCategory: 'Side',
    },
    {
      strCategory: 'Starter',
    },
    {
      strCategory: 'Vegan',
    },
    {
      strCategory: 'Vegetarian',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Categories categories={categoriesData} />
      <RecipesList />
    </SafeAreaView>
  );
}

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
