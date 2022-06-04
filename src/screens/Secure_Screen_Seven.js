import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import FingerPrintIcon from "../components/FingerPrintIcon";
import ColorPalette from "../constants/ColorPalette";

const SecureScreenSeven = () => {
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
                                   Setup face lock
                              </Text>
                         </View>
                         
                         <View style={{
                              justifyContent: "center",
                              alignItems: "center",
                              paddingVertical: 40
                         }}>
                              <View style={{
                                   alignItems: "center",
                                   width: 125,
                                   height: 125,
                                   borderRadius: 63,
                                   overflow: "hidden",
                              }}>
                                   <Image resizeMode="cover" style={{width: "100%", height: "100%"}} source={require("../../assets/profile.png")}/>
                              </View>
                         </View>
                         
                         <View style={{
                              alignItems: "center",
                         }}>
                              <Text style={{
                                   width: "80%",
                                   fontFamily: "Inter_600SemiBold",
                                   fontSize: 15,
                                   lineHeight: 18,
                                   color: "#068D68",
                                   textAlign: "center"
                              }}>
                                   All Good!
                              </Text>
                              <Text style={{
                                   width: "80%",
                                   paddingVertical: 20,
                                   textAlign: "center",
                                   fontFamily: "Inter_400Regular",
                                   fontSize: 13
                              }}>
                                   You can use face authentication to confirm making payments through the app.
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
                                        DONE
                                   </Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>

          </SafeAreaView>
          
     )
}

export default SecureScreenSeven