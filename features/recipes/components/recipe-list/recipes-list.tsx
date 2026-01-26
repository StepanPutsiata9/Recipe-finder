import { JSX } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { useRecipes } from '../../hooks';
import { RecipeItem } from '../../types';
import { MealCard } from '../recipe-item/recipe-item';
import { useStyles } from './recipes-list.styles';

export const RecipesList = (): JSX.Element => {
  const styles = useStyles();
  const { activeCategory, recipes } = useRecipes();

  const renderRecipeItem: ListRenderItem<RecipeItem> = ({ item }) => (
    <MealCard
      meal={{
        idMeal: item.idMeal,
        strMeal: item.strMeal,
        strMealThumb: item.strMealThumb,
      }}
      strArea={'World Meal'}
      strCategory={activeCategory}
      onPress={() => {}}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};
