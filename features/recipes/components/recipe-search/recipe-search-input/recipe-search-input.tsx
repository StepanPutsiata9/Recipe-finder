import { JSX, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { useLocalization } from '@/features/localization';
import { useSearchRecipes } from '@/features/recipes/hooks';
import { FeatherIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useStyles } from './recipe-search-input.styles';

export const RecipeSearchInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const styles = useStyles();
  const { colors } = useTheme();
  const { t } = useLocalization('search');
  const { handleSearch, clearSearchedRecipes } = useSearchRecipes();

  const handleTextChange = (text: string): void => {
    setInputValue(text);
    handleSearch(text);
  };

  const clearInput = (): void => {
    setInputValue('');
    handleSearch('');
    clearSearchedRecipes();
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>
        <FeatherIcon color={colors.placeholder} name="search" size={22} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={t('placeholder') + '...'}
        placeholderTextColor={colors.placeholder}
        value={inputValue}
        onChangeText={handleTextChange}
        autoCapitalize="none"
      />
      {inputValue.length > 0 && (
        <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
          <FeatherIcon color={colors.placeholder} name="x" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};
