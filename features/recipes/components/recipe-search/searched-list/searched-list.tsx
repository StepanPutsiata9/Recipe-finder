import React, { JSX, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { useSearchRecipes } from '@/features/recipes/hooks';
import { RecipeItem } from '@/features/recipes/types';

import { MealCard } from '../../recipe-list';
import { ListEmptyComponent } from './list-empty-component';
import { useStyles } from './searched-list.styles';

export const SearchedRecipesList = (): JSX.Element => {
  const styles = useStyles();
  const { searchedRecipes } = useSearchRecipes();
  const listData = useMemo(() => searchedRecipes || [], [searchedRecipes]);

  const renderRecipeItem: ListRenderItem<RecipeItem> = useCallback(
    ({ item }) => (
      <MealCard
        meal={{
          idMeal: item.idMeal,
          strMeal: item.strMeal,
          strMealThumb: item.strMealThumb,
        }}
        strArea={item?.strArea || 'World Famous'}
        strCategory={item?.strCategory || 'unknown'}
      />
    ),
    []
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
        initialNumToRender={initialNumToRender}
        maxToRenderPerBatch={10}
        windowSize={7}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={50}
        scrollEventThrottle={16}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </View>
  );
};
