import { useTheme } from '@/features/theme';
import { IColorsTheme } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { forwardRef, JSX, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

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
    const styles = useStyles(colors);

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
const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      borderRadius: 32,
      backgroundColor: colors.inputBackground,
      borderWidth: 1,
      borderColor: 'transparent',
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: colors.error,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Montserrat',
      color: colors.text.primary,
      paddingHorizontal: 20,
      paddingVertical: 0,
      height: '100%',
      includeFontPadding: false,
    },
    eyeButton: {
      paddingHorizontal: 16,
      height: '100%',
      justifyContent: 'center',
    },
    errorText: {
      fontSize: 12,
      fontFamily: 'Montserrat',
      color: colors.error,
      marginTop: 4,
      marginLeft: 20,
    },
  });
