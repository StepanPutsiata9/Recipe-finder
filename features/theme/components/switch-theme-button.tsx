import { useLocalization } from '@/features/localization';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useMemo } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../hooks';

export const SwitchThemeButton = () => {
  const { isDark, handleToggleTheme, colors } = useTheme();
  const { t } = useLocalization('settings');
  const styles = useMemo(() => createStyles(colors, indets, fontSize), [colors]);
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

const createStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: indets.m,
      paddingVertical: indets.m,
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: indets.s,
    },
    text: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.text.secondary,
      letterSpacing: 1.2,
    },
    switchWrapper: {
      ...Platform.select({
        android: {
          marginVertical: -10,
        },
        ios: {},
      }),
    },
  });
