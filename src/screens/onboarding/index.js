/**
 * IMPORTS
 */

import { View, Text, StyleSheet, Image } from "react-native";
import { SvgIconCheckWallter } from "../../common/assets/icons-svg/SvgIconCheckWallter";
import CreditCard from "../../common/assets/images/wallet-with-credit-card.jpg"

function Onboarding(){
  return (
   <View style={styles.container}>

    <View style={{
      width: '100%',
      flexDirection: "row",
      justifyContent: "center",
    }}>

      <View style={{width: 46, height: 30, marginTop: 8, alignItems: "center", justifyContent: "center"}}>
        <SvgIconCheckWallter />
      </View>
      
      <View style={{width: "auto"}}>

      <Text style={styles.title}>W$Finance</Text>
      </View>

    </View>

      <View style={styles.section}>
        <View style={styles.image}> 
          <Image style={styles.image} source={CreditCard}/>
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.titleManeger}>
              Gerencie suas contas!
          </Text>


      <View style={styles.wrapperSubtitle}>
          <Text style={styles.SubtitleManeger}>
          Você pode obter crédito. A configuração de crédito on-line não é possível por meio de um banco.
          </Text>
      </View>


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
    marginBottom: 100,
    marginLeft: 10
  },
  section: {
    width: 270,
    height: 550,
  },
  image: {
    width: 270,
    height: 305,
    marginBottom: 14
  
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleManeger: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 22,
    color: "#FFFFFF",
  },
  wrapperSubtitle: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4
  },
  SubtitleManeger: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: "#484848",
    alignItems: 'center'
  },
});



/**
 * EXPORTS
 */
export {
  Onboarding
}