/**
 * IMPORTS
 */

import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OLA JENNIFER!!!</Text>




      <View style={styles.container2}>
      <Text>sou a caixa</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * EXPORTS
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 100,
    height: 200,
    backgroundColor: 'red'
  }
});
