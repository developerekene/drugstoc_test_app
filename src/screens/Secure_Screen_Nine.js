import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import ColorPalette from "../constants/ColorPalette";

const SecureScreenNine = () => {
     return(
          <SafeAreaView style={{flex: 1}}>
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
                         
                         <View style={{
                              flex: 1,
                              alignItems: "center",
                              justifyContent: "center",
                              paddingVertical: 50,
                         }}>
                              <Image source={require("../../assets/animation50.png")}/>
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
                                   fontSize: 13,
                                   lineHeight: 25,
                                   fontFamily: "Inter_500Medium",
                                   color: ColorPalette.textSecondaryColor
                              }}>Touch the fingerprint sensor</Text>
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
                                        CANCEL 
                                   </Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>
          </SafeAreaView>
     )
}

export default SecureScreenNine