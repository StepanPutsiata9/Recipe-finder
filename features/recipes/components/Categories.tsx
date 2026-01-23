import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import { JSX, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ICategory {
  strCategory: string;
}

interface ICategoriesProps {
  categories: ICategory[];
}

export const Categories = ({ categories }: ICategoriesProps): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const { t } = useLocalization('home');
  const handleCategoryPress = (category: string): void => {
    setActiveCategory(category);
  };

  const allCategories = [{ strCategory: 'All' }, ...categories];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('categories')}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {allCategories.map((category) => {
          const isActive = activeCategory === category.strCategory;

          return (
            <TouchableOpacity
              key={category.strCategory}
              style={[styles.categoryButton, isActive && styles.activeCategoryButton]}
              onPress={() => handleCategoryPress(category.strCategory)}
              activeOpacity={0.7}
            >
              <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>
                {category.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      marginBottom: indets.l,
    },
    title: {
      color: colors.text.primary,
      fontSize: fontSize.l,
      fontFamily: 'MontserratBold',
      marginBottom: indets.s,
      marginLeft: indets.m,
    },
    scrollContent: {
      paddingHorizontal: indets.m,
    },
    categoryButton: {
      paddingHorizontal: indets.m,
      paddingVertical: indets.xs,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 20,
      marginRight: indets.xs,
      minHeight: 36,
      justifyContent: 'center',
    },
    activeCategoryButton: {
      backgroundColor: colors.primary,
    },
    categoryText: {
      color: colors.text.secondary,
      fontSize: indets.s,
      fontFamily: 'Montserrat',
    },
    activeCategoryText: {
      color: colors.activeCategory,
      fontFamily: 'Montserrat',
    },
  });
