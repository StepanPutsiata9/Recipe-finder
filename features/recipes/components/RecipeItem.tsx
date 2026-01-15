import { IColorsTheme } from '@/features/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface IMealCard {
  colors: IColorsTheme;
  meal: {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strArea: string;
  };
  onPress?: () => void;
}

export const MealCard = ({ colors, meal, onPress }: IMealCard) => {
  const styles = useStyles(colors);

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

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      marginBottom: 25,
      borderBottomWidth: 1,
      paddingBottom: 10,
      borderColor: colors.placeholder,
    },
    imageContainer: {
      width: 78,
      height: 78,
      overflow: 'hidden',
      borderRadius: 16,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'space-between',
      marginLeft: 16,
    },
    mainInfo: {
      flex: 1,
    },
    mealName: {
      color: colors.text.primary,
      fontSize: 18,
      fontFamily: 'MontserratBold',
      marginBottom: 5,
      lineHeight: 22,
    },
    detailsRow: {
      flexDirection: 'column',
    },
    detailTag: {
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
      paddingVertical: 1,
    },
    categoryTag: {
      backgroundColor: 'rgba(255, 165, 0, 0.1)',
      borderColor: 'rgba(255, 165, 0, 0.3)',
    },
    detailText: {
      color: colors.text.primary,
      fontSize: 12,
      fontFamily: 'Montserrat',
      letterSpacing: 0.3,
    },
    categoryText: {
      color: colors.placeholder,
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    viewText: {
      color: colors.text.secondary,
      fontSize: 12,
      fontFamily: 'Montserrat',
      marginRight: 6,
    },
    arrowContainer: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: 'rgba(255, 99, 71, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
