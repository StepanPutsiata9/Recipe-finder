import { StyleSheet, Text, View } from 'react-native';

export default function Registration() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
