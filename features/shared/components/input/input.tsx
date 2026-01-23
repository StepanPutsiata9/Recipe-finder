import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { forwardRef, JSX, useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useStyles } from './input.styles';

interface IInput extends TextInputProps {
  value: string;
  placeholder: string;
  error?: string | null;
  onChangeText: (text: string) => void;
  isSecure?: boolean;
  containerStyle?: ViewStyle;
}

export const Input = forwardRef<TextInput, IInput>(
  (
    {
      value,
      error,
      placeholder,
      onChangeText,
      isSecure = false,
      keyboardType = 'default',
      autoCapitalize = 'none',
      returnKeyType = 'next',
      ...props
    },
    ref
  ): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const { colors } = useTheme();
    const styles = useStyles(colors, indets, fontSize);

    return (
      <View>
        <View style={[styles.inputContainer, error && styles.errorContainer]}>
          <TextInput
            ref={ref}
            value={value}
            placeholder={placeholder}
            style={styles.textInput}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={false}
            placeholderTextColor={colors.placeholder}
            returnKeyType={returnKeyType}
            secureTextEntry={isSecure && !showPassword}
            {...props}
          />

          {isSecure && (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={22}
                color={colors.placeholder}
              />
            </TouchableOpacity>
          )}
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);
Input.displayName = 'Input';
