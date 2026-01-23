import { useLocalization } from '@/features/localization/hooks';
import { fontSize, indets } from '@/styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { JSX, useMemo } from 'react';
import { Switch, Text, View } from 'react-native';
import { useTheme } from '@/features/theme/hooks';
import { createStyles } from './switch-theme-button.styles';

export const SwitchThemeButton = (): JSX.Element => {
  const { isDark, handleToggleTheme, colors } = useTheme();
  const { t } = useLocalization('settings');
  const styles = useMemo(() => createStyles(colors, indets, fontSize), [colors, indets, fontSize]);
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <AntDesign
          name={isDark ? 'moon' : 'sun'}
          size={20}
          color={isDark ? colors.secondaryButtonBorder : colors.primary}
        />
        <Text style={styles.text}>{isDark ? t('darkMode') : t('lightMode')}</Text>
      </View>

      <View style={styles.switchWrapper}>
        <Switch
          value={isDark}
          onValueChange={handleToggleTheme}
          trackColor={{ false: colors.trackFalse, true: colors.trackTrue }}
          thumbColor={colors.switchColors.thumbColor}
          ios_backgroundColor={colors.switchColors.ios_backgroundColor}
        />
      </View>
    </View>
  );
};
