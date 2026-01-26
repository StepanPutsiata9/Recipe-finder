import { JSX, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/tabs-styles/index.styles';
import {
  Categories,
  ErrorContainer,
  Header,
  LoadingContainer,
  RecipesList,
  useRecipes,
} from '@/features/recipes';

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
  const { loadRecipes, recipesLoading, recipesErorr } = useRecipes();
  useEffect(() => {
    loadRecipes('Beef');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {recipesLoading && <LoadingContainer isLoading={recipesLoading} />}
      {recipesErorr && <ErrorContainer error={recipesErorr} />}
      {!recipesLoading && !recipesLoading && (
        <>
          <Categories categories={categoriesData} />
          <RecipesList />
        </>
      )}
    </SafeAreaView>
  );
}
