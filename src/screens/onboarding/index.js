/**
 * IMPORTS
 */

import { View, Text, StyleSheet } from "react-native";


function Onboarding(){
  return (
   <View style={styles.container}>
      <Text style={styles.title}>W$Finance</Text>

      <View style={styles.section}>
        <View style={styles.image}> 

        </View>

        <View style={styles.wrapper}>
          <Text>
              Gerencie suas contas!
          </Text>
        </View>
      </View>
   </View>
  )
}





const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1, // ocupa todo espaçõ em branco em tela
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32, // alterar o tamanho da fonte
    fontWeight: "bold", // alterar a espesura de sua font
    color: "#A7CE44", // alterar a cor do texto
    marginBottom: 110,
  },
  section: {
    width: 270,
    height: 550,
    backgroundColor: "red"
  },
  image: {
    width: 270,
    height: 305,
    backgroundColor: "blue"
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});



/**
 * EXPORTS
 */
export {
  Onboarding
}