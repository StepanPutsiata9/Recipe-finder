import { PrimaryButton } from '@/features/shared';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <PrimaryButton title="Войти" onPress={() => {}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
});
