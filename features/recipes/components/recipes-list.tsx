import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import { StyleSheet, Text, View } from 'react-native';
import { MealCard } from './recipe-item';

export const RecipesList = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
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
const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: indets.m,
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: indets.l,
      fontFamily: 'MontserratBold',
      marginBottom: indets.s,
    },
  });
