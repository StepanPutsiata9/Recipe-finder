import { IColorsTheme } from '@/features/theme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';

interface IInput {
  value: string;
  placeholder: string;
  error: null | string;
  onChangeText: (text: string) => void;
  isSecure?: boolean;
  containerStyle?: ViewStyle;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  colors: IColorsTheme;
}

export const Input = ({
  value,
  error,
  placeholder,
  onChangeText,
  isSecure = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'next',
  colors,
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const styles = useStyles(colors);
  return (
    <View style={[styles.inputContainer, error && styles.errorContainer]}>
      <TextInput
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
  );
};

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
  });
