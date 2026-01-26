import { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/tabs-styles/index.styles';
import { Categories, Header, RecipesList } from '@/features/recipes';

export default function Home(): JSX.Element {
  const styles = useStyles();
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
