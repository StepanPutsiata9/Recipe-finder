import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';
import { MealCard } from './RecipeItem';

interface IRecipesList {
  colors: IColorsTheme;
}
export const RecipesList = ({ colors }: IRecipesList) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <MealCard
        colors={colors}
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
        colors={colors}
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
const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    title: {
      color: colors.text.primary,
      fontSize: 18,
      fontFamily: 'MontserratBold',
      marginBottom: 12,
    },
  });
