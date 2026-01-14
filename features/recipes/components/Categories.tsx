import { IColorsTheme } from '@/features/theme';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ICategory {
  strCategory: string;
}

interface ICategoriesProps {
  colors: IColorsTheme;
  categories: ICategory[];
}

export const Categories = ({ colors, categories }: ICategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const styles = useStyles(colors);

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
  };

  const allCategories = [{ strCategory: 'All' }, ...categories];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

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

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    title: {
      color: colors.text.primary,
      fontSize: 18,
      fontFamily: 'MontserratBold',
      marginBottom: 12,
      marginLeft: 16,
    },
    scrollContent: {
      paddingHorizontal: 16,
    },
    categoryButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 20,
      marginRight: 8,
      minHeight: 36,
      justifyContent: 'center',
    },
    activeCategoryButton: {
      backgroundColor: colors.primary,
    },
    categoryText: {
      color: colors.text.secondary,
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
    activeCategoryText: {
      color: '#fff',
      fontFamily: 'Montserrat',
    },
  });
