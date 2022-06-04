import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import FingerPrintIcon from "../components/FingerPrintIcon";
import ColorPalette from "../constants/ColorPalette";

const SecureScreenEight = () => {
     return(
          <SafeAreaView style={{flex: 1}}>
               <View style={{
                         justifyContent: "center",
                         alignItems: "center",
                    }}>
                    <View style={{
                         position: "absolute",
                         top: 0,
                         left: 0,
                         paddingLeft: 10,
                    }}>
                         <EvilIcons name="chevron-left" size={24} color="#999999" />
                    </View>
                    <Text style={{
                         fontSize: 17,
                         fontFamily: "Inter_500Medium",
                         textAlign: "center",
                    }}>
                         Security
                    </Text>
               </View>

               <View style={{
                    flex: 1,
                    justifyContent: "space-between"
               }}>
                    <View style={{flex: 1}}>
                         <View style={{
                              marginVertical: 20,
                              height: 1,
                              backgroundColor: "#E2E2E2B2"
                         }} />

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
                              onPress={() => {}}
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
          </SafeAreaView>
     )
}

export default SecureScreenEight