import React, { JSX, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { useFavoritesRecipes } from '@/features/recipes/hooks';
import { RecipeItem } from '@/features/recipes/types';

import { MealCard } from '../../recipe-list';
import { useStyles } from './favorites-recipes-list.styles';
import { ListEmptyComponent } from './list-empty-component';

export const FavoritesRecipesList = (): JSX.Element => {
  const styles = useStyles();
  const { favoritesRecipes } = useFavoritesRecipes();
  const listData = useMemo(() => favoritesRecipes || [], [favoritesRecipes]);

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
        contentContainerStyle={styles.list}
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
