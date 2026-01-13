import { IColorsTheme } from '@/features/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  colors: IColorsTheme;
}

export function PrimaryButton({ title, onPress, colors }: PrimaryButtonProps) {
  const styles = useStyles(colors);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={['#FF6E41', '#FF602E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    gradient: {
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 52,
      width: '100%',
      alignSelf: 'center',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
    },
    text: {
      fontSize: 16,
      color: colors.primaryButtonText,
      fontFamily: 'Montserrat',
      textAlign: 'center',
    },
  });
