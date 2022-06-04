import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import ColorPalette from "../constants/ColorPalette";

const SecureScreenThree = () => {
     let [pin, updatePin] = useState({
          first: "0",
          second: "0",
          third: "0",
          fourth: "0"
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
                    <Text style={{
                         fontSize: 17,
                         fontFamily: "Inter_500Medium",
                         textAlign: "center",
                    }}>
                         Security
                    </Text>
                    <View style={{
                         position: "absolute",
                         top: 0,
                         right: 0,
                         paddingRight: 10,
                    }}>
                         <EvilIcons name="close" size={24} color="black" />
                    </View>
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
                                        borderColor: pin.first == "" ? "#C4C4C4" : "#4B70D6",
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
                                        borderColor: pin.second == "" ? "#C4C4C4" : "#4B70D6",
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
                                        borderColor: pin.third == "" ? "#C4C4C4" : "#4B70D6",
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
                                        borderColor: pin.fourth == "" ? "#C4C4C4" : "#4B70D6",
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
                         <View style={{
                              justifyContent: "center",
                              alignItems: "center",
                              paddingVertical: 10
                         }}>
                              <Text style={{
                                   fontSize: 15,
                                   lineHeight: 25,
                                   fontFamily: "Inter_600SemiBold",
                                   color: ColorPalette.colorSuccess
                              }}>All Good!</Text>
                         </View>
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
                                        DONE
                                   </Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>
          </SafeAreaView>
          
     )
}

export default SecureScreenThree