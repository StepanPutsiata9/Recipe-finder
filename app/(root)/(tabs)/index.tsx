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

  const { initialLoadRecipes, recipesLoading, recipesErorr, categories } = useRecipes();
  useEffect(() => {
    initialLoadRecipes('Beef');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Categories categories={categories || []} />
      {recipesLoading && <LoadingContainer isLoading={recipesLoading} />}
      {recipesErorr && <ErrorContainer error={recipesErorr} />}
      {!recipesLoading && !recipesLoading && (
        <>
          <RecipesList />
        </>
      )}
    </SafeAreaView>
  );
}
