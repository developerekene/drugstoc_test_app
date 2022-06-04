import { ImageBackground, View, Text, Image, TouchableHighlight } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FaceIdIcon80 from "../components/FaceIdIcon80"


const SecureScreenFive = () => {
     return(
          <ImageBackground source={require("../../assets/jason-yoder.png")} resizeMode="cover"
               style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    
               }}>
               <SafeAreaView style={{width: "100%", height: "100%", justifyContent: "space-between"}}>
                    <View style={{
                         flex: 1,
                         justifyContent: "center",
                         alignItems: "center",
                    }}>
                         <View>
                              <Text style={{color: "#FFF", fontFamily: "Inter_400Regular", fontSize: 13}}>Postion your camera at the middle</Text>
                         </View>
                         <View style={{
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                         }}>
                              <FaceIdIcon80 />
                         </View>
                    </View>
                    <View style={{
                         width: "100%",
                         padding: 10,
                    }}>
                         <TouchableHighlight
                              underlayColor="#00000010"
                              onPress={() => {}}
                              style={{
                                   borderColor: "#fff",
                                   borderWidth: 3,
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
               </SafeAreaView>
          </ImageBackground>
     )
}

export default SecureScreenFive