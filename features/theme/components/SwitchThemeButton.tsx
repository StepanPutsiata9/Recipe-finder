import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';

interface ISwitchThemeButtonProps {
  onPress: () => void;
  isDarkMode?: boolean;
}

export const SwitchThemeButton = ({ onPress, isDarkMode = false }: ISwitchThemeButtonProps) => {
  const [isEnabled, setIsEnabled] = useState(isDarkMode);

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onPress();
  };

  return (
    <View style={[styles.container, isEnabled && styles.containerDark]}>
      <View style={styles.iconTextContainer}>
        <AntDesign
          name={isEnabled ? 'moon' : 'sun'}
          size={20}
          color={isEnabled ? '#FFD6CC' : '#FF6E41'}
        />
        <Text style={[styles.text, isEnabled && styles.textDark]}>
          {isEnabled ? 'Dark mode' : 'Light mode'}
        </Text>
      </View>

      <View style={styles.switchWrapper}>
        <Switch
          value={isEnabled}
          onValueChange={handleToggle}
          trackColor={{ false: '#E5E7EB', true: '#FF8C6B' }}
          thumbColor={isEnabled ? '#FF6E41' : '#F9FAFB'}
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
