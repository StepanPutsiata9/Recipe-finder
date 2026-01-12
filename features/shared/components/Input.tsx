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
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);
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
        placeholderTextColor={'#BBBBBB'}
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
            color="#888888"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 32,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  errorContainer: {
    borderColor: '#FF1B44',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#000',
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
