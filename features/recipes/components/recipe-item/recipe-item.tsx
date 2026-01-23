import { useTheme } from '@/features/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import React, { JSX } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from './recipe-item.styles';
interface IMealCard {
  meal: {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strArea: string;
  };
  onPress?: () => void;
}

export const MealCard = ({ meal, onPress }: IMealCard): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.mainInfo}>
          <Text style={styles.mealName} numberOfLines={1}>
            {meal.strMeal}
          </Text>

          <View style={styles.detailsRow}>
            <View style={styles.detailTag}>
              <Feather name="map-pin" size={14} color={colors.primary} />
              <Text style={styles.detailText}>{meal.strArea}</Text>
            </View>
            <View style={styles.detailTag}>
              <Text style={styles.categoryText}>{meal.strCategory}</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionRow}>
          <Text style={styles.viewText}>View recipe</Text>
          <View style={styles.arrowContainer}>
            <AntDesign name="arrow-right" size={14} color={colors.primary} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
