import { JSX } from 'react';
import { Text, View } from 'react-native';

import { useLocalization } from '@/features/localization';

import { MealCard } from '../recipe-item/recipe-item';
import { useStyles } from './recipes-list.styles';

export const RecipesList = (): JSX.Element => {
  const styles = useStyles();
  const { t } = useLocalization('home');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('recipes')}</Text>
      <MealCard
        meal={{
          idMeal: '53262',
          strMeal: 'Adana kebab',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/04axct1763793018.jpg',
          strCategory: 'Lamb',
          strArea: 'Belarus',
        }}
        onPress={() => {}}
      />
      <MealCard
        meal={{
          idMeal: '53263',
          strMeal: 'Air Fryer Egg Rolls',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/grhn401765687086.jpg',
          strCategory: 'Side',
          strArea: 'Chinese',
        }}
        onPress={() => {}}
      />
    </View>
  );
};
