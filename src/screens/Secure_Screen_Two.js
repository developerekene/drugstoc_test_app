import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import ColorPalette from "../constants/ColorPalette";

const SecureScreenTwo = () => {

     let [pin, updatePin] = useState({
          first: "",
          second: "",
          third: "",
          fourth: ""
     })

     function changePin(text, key) {
          pin[key] = text;
          updatePin({...pin})
     }

     return(
          <SafeAreaView style={{
               flex: 1
          }}>
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
                    <View>
                         <View style={{
                              marginVertical: 20,
                              height: 1,
                              backgroundColor: "#E2E2E2B2"
                         }} />

                         <View style={{
                              justifyContent: "center",
                              alignItems: "center"
                         }}>
                              <Text style={{
                                   textAlign: "center",
                                   paddingVertical: 20,
                                   color: "#181725",
                                   fontFamily: "Inter_500Medium",
                                   fontSize: 17,
                              }}>
                                   Secure with a pin
                              </Text>
                              <View style={{
                                   flexDirection: "row",
                                   justifyContent: "center"
                              }}>
                                   <View style={{
                                        height: 45,
                                        width: 45,
                                        margin: 5,
                                        borderWidth: 1,
                                        borderColor: "#C4C4C4",
                                        borderRadius: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                   }}>
                                        <TextInput 
                                             secureTextEntry
                                             keyboardType="default" 
                                             maxLength={1}
                                             value={pin.first}
                                             onChangeText={(text)=> changePin(text, "first")}
                                             style={{
                                                  textAlign: "center"
                                             }}
                                             />
                                   </View>

                                   <View style={{
                                        height: 45,
                                        width: 45,
                                        margin: 5,
                                        borderWidth: 1,
                                        borderColor: "#C4C4C4",
                                        borderRadius: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                   }}>
                                        <TextInput 
                                             secureTextEntry
                                             keyboardType="default" 
                                             maxLength={1}
                                             value={pin.second}
                                             onChangeText={(text)=> changePin(text, "second")}
                                             style={{
                                                  textAlign: "center"
                                             }}
                                             />
                                   </View>

                                   <View style={{
                                        height: 45,
                                        width: 45,
                                        margin: 5,
                                        borderWidth: 1,
                                        borderColor: "#C4C4C4",
                                        borderRadius: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                   }}>
                                        <TextInput 
                                             secureTextEntry
                                             keyboardType="default" 
                                             maxLength={1}
                                             value={pin.third}
                                             onChangeText={(text)=> changePin(text, "third")}
                                             style={{
                                                  textAlign: "center"
                                             }}
                                             />
                                   </View>

                                   <View style={{
                                        height: 45,
                                        width: 45,
                                        margin: 5,
                                        borderWidth: 1,
                                        borderColor: "#C4C4C4",
                                        borderRadius: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                   }}>
                                        <TextInput 
                                             secureTextEntry
                                             keyboardType="default" 
                                             maxLength={1}
                                             value={pin.fourth}
                                             onChangeText={(text)=> changePin(text, "fourth")}
                                             style={{
                                                  textAlign: "center"
                                             }}
                                             />
                                   </View>
                              </View>
                         </View>
                         
                         <View style={{
                              alignItems: "center",
                              paddingVertical: 50
                         }}>
                              <Text style={{
                                   textAlign: "center",
                                   color: ColorPalette.textPrimaryColor,
                                   fontFamily: "Inter_500Medium",
                                   fontSize: 15,
                                   width: "80%",
                              }}>
                                   Enter your pin to lock credit
                              </Text>
                              <Text style={{
                                   paddingVertical: 20,
                                   width: "80%",
                                   textAlign: "center",
                                   fontSize: 13,
                                   fontFamily: "Inter_400Regular",
                                   color: ColorPalette.textPrimaryColor
                              }}>
                                   You can use a pin authentication to confirm making payments through this app
                              </Text>
                         </View>
                    </View>

                    <View style={{
                         padding: 10
                    }}>
                         <TouchableHighlight
                              underlayColor="#918787"
                              onPress={() => {}}
                              style={{
                                   backgroundColor: "#979797",
                                   height: 48,
                                   justifyContent: "center",
                                   alignItems: "center",
                                   borderRadius: 20
                              }}
                              >
                              <View>
                                   <Text style={{ color: "#FFF"}}>
                                        COMFIRM PIN
                                   </Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>
          </SafeAreaView>
          
     )
}

export default SecureScreenTwo