import { Input } from '@/features/shared';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <View style={styles.inputsContainer}>
        <Input
          value={value}
          onChangeText={(text: string) => setValue(text)}
          placeholder="Введите логин"
          error={null}
          isSecure={false}
        />
        <Input
          value={value}
          onChangeText={(text: string) => setValue(text)}
          placeholder="Введите пароль"
          error={'null'}
          isSecure={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 12,
  },
  inputsContainer: {
    width: '100%',
    marginBottom: 12,
    gap: 12,
  },
});
