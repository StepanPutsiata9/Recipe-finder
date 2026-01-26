import { JSX, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization } from '@/features/localization';

import { useRecipes } from '../../hooks';
import { useStyles } from './categories.styles';

interface ICategory {
  strCategory: string;
}

interface ICategoriesProps {
  categories: ICategory[];
}

export const Categories = ({ categories }: ICategoriesProps): JSX.Element => {
  const { activeCategory, handleCategoryChange, loadRecipes } = useRecipes();
  const [selesctedCategory, setSelectedCategory] = useState<string>(activeCategory);
  const styles = useStyles();
  const { t } = useLocalization('home');
  const handleCategoryPress = (category: string): void => {
    if (category !== selesctedCategory) {
      handleCategoryChange(category);
      setSelectedCategory(category);
      loadRecipes(category);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('categories')}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => {
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
