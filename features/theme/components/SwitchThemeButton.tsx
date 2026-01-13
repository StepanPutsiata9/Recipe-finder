import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../hooks';
import { IColorsTheme } from '../types';

interface ISwitchThemeButtonProps {
  colors: IColorsTheme;
}

export const SwitchThemeButton = ({ colors }: ISwitchThemeButtonProps) => {
  const { isDark, handleToggleTheme } = useTheme();
  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.iconTextContainer}>
        <AntDesign
          name={isDark ? 'moon' : 'sun'}
          size={20}
          color={isDark ? '#FFD6CC' : '#FF6E41'}
        />
        <Text style={[styles.text, isDark && styles.textDark]}>
          {isDark ? 'Dark mode' : 'Light mode'}
        </Text>
      </View>

      <View style={styles.switchWrapper}>
        <Switch
          value={isDark}
          onValueChange={handleToggleTheme}
          trackColor={{ false: '#E5E7EB', true: '#FF8C6B' }}
          thumbColor={isDark ? '#FF6E41' : '#F9FAFB'}
          ios_backgroundColor="#E5E7EB"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFF5F2',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#FFE5DC',
  },
  containerDark: {
    backgroundColor: '#2A2A2A',
    borderColor: '#444444',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#1F2937',
  },
  textDark: {
    color: '#F9FAFB',
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
