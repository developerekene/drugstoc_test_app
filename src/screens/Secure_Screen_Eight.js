import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import FingerPrintIcon from "../components/FingerPrintIcon";
import ColorPalette from "../constants/ColorPalette";

const SecureScreenEight = ({ navigation }) => {
     return(
          <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}>
               <View style={{flex: 1}}>
                    <View style={{
                         flex: 1,
                         justifyContent: "space-between"
                    }}>
                         <View style={{flex: 1}}>
                              <View>
                                   <Text style={{
                                        textAlign: "center",
                                        color: "#181725",
                                        fontFamily: "Inter_500Medium",
                                        fontSize: 17
                                   }}>
                                        Setup fingerprint
                                   </Text>
                              </View>
                              
                              <View style={{
                                   alignItems: "center",
                                   paddingVertical: 50
                              }}>
                                   <FingerPrintIcon gfill={ColorPalette.textSecondaryColor} />
                              </View>
                              
                              <View style={{
                                   alignItems: "center",
                              }}>
                                   <View style={{
                                             justifyContent: "center",
                                             alignItems: "center",
                                             paddingVertical: 10
                                        }}>
                                        <Text style={{
                                             fontSize: 15,
                                             lineHeight: 25,
                                             fontFamily: "Inter_500Medium",
                                             color: "#181725"
                                        }}>Use your fingerprint</Text>
                                   </View>
                                   <Text style={{
                                        width: "80%",
                                        fontFamily: "Inter_400Regular",
                                        paddingVertical: 20,
                                        textAlign: "center",
                                        fontSize: 13
                                   }}>
                                        You can use your fingerprint to confirm making payments through this app.
                                   </Text>
                              </View>
                         </View>

                         <View style={{
                              padding: 10
                         }}>
                              <TouchableHighlight
                                   underlayColor="#2B4386"
                                   onPress={() => {
                                        navigation.navigate("SecureScreenNine")
                                   }}
                                   style={{
                                        backgroundColor: "#4B70D6",
                                        height: 48,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 20
                                   }}
                                   >
                                   <View>
                                        <Text style={{ color: "#FFF"}}>
                                             GET STARTED 
                                        </Text>
                                   </View>
                              </TouchableHighlight>
                         </View>
                    </View>
               </View>
          </SafeAreaView>
     )
}

export default SecureScreenEight