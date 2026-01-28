import { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useLocalization } from '@/features/localization';
import { useRecipeAnimations, useRecipeInfo } from '@/features/recipes';

import useStyles from './recipe-info-tabs.styles';

export function RecipeInfoTabs(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('recipeInfo');
  const { recipe, ingredients } = useRecipeInfo();
  const { animatedTabStyle, setTabContainerWidth, activeTab, handleTabChange } =
    useRecipeAnimations();

  return (
    <>
      <View
        style={styles.tabsContainer}
        onLayout={(event) => setTabContainerWidth(event.nativeEvent.layout.width)}
      >
        <Animated.View style={[styles.activeTabIndicator, animatedTabStyle]} />
        <TouchableOpacity
          style={[styles.tab, activeTab === 'ingredients' && styles.activeTab]}
          onPress={() => handleTabChange('ingredients')}
        >
          <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
            {t('ingredients')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'instructions' && styles.activeTab]}
          onPress={() => handleTabChange('instructions')}
        >
          <Text style={[styles.tabText, activeTab === 'instructions' && styles.activeTabText]}>
            {t('instructions')}
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'ingredients' ? (
        <View style={styles.ingredientsSection}>
          <Text style={styles.sectionTitle}>
            {t('ingredients')} ({ingredients.length})
          </Text>

          <View style={styles.ingredientsList}>
            {ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientItem}>
                <View style={styles.ingredientDot} />
                <Text style={styles.ingredientText}>
                  <Text style={styles.measureText}>{item.measure} </Text>
                  {item.ingredient}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.instructionsSection}>
          <Text style={styles.sectionTitle}>{t('stepInstructions')}</Text>

          <View style={styles.instructionsContent}>
            {recipe?.strInstructions
              .split('\r\n')
              .filter((step) => step.trim())
              .map((step, index) => (
                <View key={index} style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{step.trim()}</Text>
                </View>
              ))}
          </View>
        </View>
      )}
    </>
  );
}
