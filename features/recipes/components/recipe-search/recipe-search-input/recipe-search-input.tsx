import React from 'react';
import { TextInput, View } from 'react-native';

import { useLocalization } from '@/features/localization';
import { FeatherIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useStyles } from './recipe-search-input.styles';

export const RecipeSearchInput = (): React.JSX.Element => {
  const styles = useStyles();
  const { colors } = useTheme();
  const { t } = useLocalization('search');
  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>
        <FeatherIcon color={colors.placeholder} name="search" size={22} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={t('placeholder') + '...'}
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
};
