import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import FaceIdIcon from "../components/FaceIdIcon/FaceIdIcon";

const SecureScreenFour = () => {
     return(
          <SafeAreaView style={{
               flex: 1
          }}>
               <View style={{
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
                              fontFamily: "Inter_500Medium",
                              color: "#181725",
                              fontSize: 17,
                         }}>
                              Setup face lock
                         </Text>
                    </View>
                    
                    <View style={{
                         alignItems: "center",
                         marginVertical: 50
                    }}>
                         <FaceIdIcon />
                    </View>
                    
                    <View style={{
                         alignItems: "center",
                    }}>
                         <Text style={{
                              fontFamily: "Inter_500Medium",
                              fontSize: 15,
                              marginBottom: 20
                         }}>
                              Verify it's you
                         </Text>
                         <Text style={{
                              fontFamily: "Inter_400Regular",
                              textAlign: "center",
                              fontSize: 13,
                              textAlign: "center",
                              width: "80%"
                         }}>
                              You can use face authentication to confirm making payments through the app.
                         </Text>
                    </View>
               </View>

               <View style={{padding: 10}}>
                    <TouchableHighlight
                         underlayColor="#1E3471"
                         onPress={() => {}}
                         style={{
                              backgroundColor: "#4B70D6",
                              height: 48,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 20
                         }}>
                         <View>
                              <Text style={{ color: "#FFF", fontFamily: "Inter_500Medium" }}>
                              GET STARED
                              </Text>
                         </View>
                    </TouchableHighlight>
               </View>
          </SafeAreaView>
          
     )
}

export default SecureScreenFour