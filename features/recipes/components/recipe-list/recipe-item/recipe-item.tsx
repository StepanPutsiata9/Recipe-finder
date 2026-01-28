import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React, { JSX } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization } from '@/features/localization';
import { FeatherIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useStyles } from './recipe-item.styles';

interface IMealCard {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
  strCategory: string;
  strArea: string;
}

export const MealCard = React.memo(({ meal, strCategory, strArea }: IMealCard): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();
  const router = useRouter();
  const { t } = useLocalization('home');
  return (
    <View style={styles.container}>
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
              <FeatherIcon name="map-pin" size={14} color={colors.primary} />
              <Text style={styles.detailText}>{strArea}</Text>
            </View>
            <View style={styles.detailTag}>
              <Text style={styles.categoryText}>{strCategory}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => {
            router.navigate({
              pathname: `/(root)/recipe-info`,
              params: { id: meal.idMeal },
            });
          }}
          activeOpacity={0.9}
        >
          <Text style={styles.viewText}>{t('viewRecipe')}</Text>
          <View style={styles.arrowContainer}>
            <AntDesign name="arrow-right" size={14} color={colors.primary} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

MealCard.displayName = 'MealCard';
