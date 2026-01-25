import { useTheme } from '@/features/theme/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import React, { JSX } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from './primary-button.styles';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled: boolean;
}

export function PrimaryButton({ title, onPress, disabled }: PrimaryButtonProps): JSX.Element {
  const { colors } = useTheme();
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} disabled={disabled}>
      <LinearGradient
        colors={[colors.primaryGradient.start, colors.primaryGradient.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient, disabled && styles.disabled]}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
