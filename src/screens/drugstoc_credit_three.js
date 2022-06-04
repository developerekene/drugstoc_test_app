import {View, Image, Text, TouchableHighlight} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ColorPalette from "../constants/ColorPalette"

const DrugstockCreditThree = ({ navigation }) => {
     return(
          <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}>
               <View style={{
                    flex: 1,
                    justifyContent: "space-between",
                    backgroundColor: "#FFF"
               }}>
                    <View style={{
                         flex: 1,
                         justifyContent: "center"
                    }}>
                         <View style={{
                              alignItems: 'center',
                         }}>
                              <Image source={require('../../assets/image1.png')}/>
                         </View>
                         <View style={{
                              padding: 20,
                              justifyContent: "center",
                              alignItems: "center"
                         }}>
                              <Text style={{
                                   textAlign:'center',
                                   fontSize: 17,
                                   fontFamily: "Inter_400Regular",
                                   lineHeight: 24,
                                   letterSpacing: 1.5,
                              }}>
                                   Hey, your loan application was successful.
                              </Text>
                         </View>
                         <View style={{
                              padding: 20
                         }}>
                              <Text style={{
                                   textAlign: 'center',
                                   fontFamily: "Inter_600SemiBold",
                                   fontSize: 18,
                                   lineHeight: 22,
                                   letterSpacing: 1,
                                   color: ColorPalette.colorSuccess
                              }}>
                                   Congrats!!!
                              </Text>
                         </View>
                    </View>
                    <View style={{padding: 10}}>
                         <TouchableHighlight
                              underlayColor="#b5363b"
                              onPress={() => {
                                   navigation.navigate("SecureScreenOne")
                              }}
                              style={{
                                   backgroundColor: "#DB353A",
                                   height: 48,
                                   justifyContent: "center",
                                   alignItems: "center",
                                   borderRadius: 20
                              }}>
                              <View>
                                   <Text style={{ color: "#FFF", fontFamily: "Inter_500Medium" }}>
                                   ALRIGHTY, GOT IT
                                   </Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>
          </SafeAreaView>
     )
}

export default DrugstockCreditThree