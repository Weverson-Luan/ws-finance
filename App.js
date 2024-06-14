/**
 * IMPORTS
 */

import { Text, View, Button, StyleSheet } from "react-native";


const Teste1 = () => {
  return (
    <View style={styles.test1}>
        <Text style={styles.textTitle}>Logooo</Text>
        
      <View>
      </View>
    </View>
  );
};

const Teste2 = () => {
  return (
    <View style={styles.test2}>
      <View>
        <Text style={styles.textTitle2}>Logooo2</Text>

        <Button title="Click" />
      </View>
    </View>
  );
};


export default function App() {
  return <>{false ? <Teste1 /> : <Teste2 />}</>;
}

/**
 * EXPORTS
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
  },
  test1: {
    width: "100%", // largura da tela
    backgroundColor: "red", // cor de fundo
    flex: 1, // largura disponivél em tela
    alignItems: "center",
    justifyContent: "center",
    
  },
  textTitle: {
    fontSize: 18,
    color: "#fff",
   
  },
  test2: {
    width: "100%",
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center",
  },
  textTitle2: {
    fontWeight: '700',
    fontSize: 24,
    color: "#fff",
  }
});
