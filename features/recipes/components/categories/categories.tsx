import { JSX, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization } from '@/features/localization';

import { useStyles } from './categories.styles';

interface ICategory {
  strCategory: string;
}

interface ICategoriesProps {
  categories: ICategory[];
}

export const Categories = ({ categories }: ICategoriesProps): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const styles = useStyles();
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
