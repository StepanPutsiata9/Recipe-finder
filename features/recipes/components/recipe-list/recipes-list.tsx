import React, { JSX, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { useRecipes } from '../../hooks';
import { RecipeItem } from '../../types';
import MealCard from '../recipe-item/recipe-item';
import { useStyles } from './recipes-list.styles';

export const RecipesList = (): JSX.Element => {
  const styles = useStyles();
  const { activeCategory, recipes } = useRecipes();

  const listData = useMemo(() => recipes || [], [recipes]);

  const renderRecipeItem: ListRenderItem<RecipeItem> = useCallback(
    ({ item }) => (
      <MealCard
        meal={{
          idMeal: item.idMeal,
          strMeal: item.strMeal,
          strMealThumb: item.strMealThumb,
        }}
        strArea={'World Famous'}
        strCategory={activeCategory}
      />
    ),
    [activeCategory]
  );

  const keyExtractor = useCallback((item: RecipeItem) => item.idMeal, []);
  const initialNumToRender = useMemo(() => {
    const count = listData.length;
    if (count < 5) return count;
    if (count < 10) return 5;
    return 10;
  }, [listData.length]);

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderRecipeItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        initialNumToRender={initialNumToRender}
        maxToRenderPerBatch={10}
        windowSize={7}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={50}
        scrollEventThrottle={16}
      />
    </View>
  );
};
