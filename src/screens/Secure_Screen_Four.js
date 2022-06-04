import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EvilIcons } from '@expo/vector-icons';
import FaceIdIcon from "../components/FaceIdIcon/FaceIdIcon";

const SecureScreenFour = ({ navigation }) => {
     return(
          <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}>
               <View style={{
                    flex: 1,
                    backgroundColor: "#FFF"
               }}>
                    <View style={{
                         flex: 1
                    }}>
                         <View style={{
                              marginVertical: 15,
                              height: 1,
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
                              onPress={() => {
                                   navigation.navigate("SecureScreenFive")
                              }}
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
               </View>
          </SafeAreaView>
          
     )
}

export default SecureScreenFour