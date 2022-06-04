import { ImageBackground, View, Text, Image, TouchableHighlight } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const SecureScreenSix = ({ navigation }) => {

     setTimeout(() => {
          navigation.navigate("SecureScreenSeven")
     }, 5000);

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
                         <Image resizeMode="contain" source={require("../../assets/animation51.png")} style={{
                              width: 188,
                              height: 188,
                         }}/>
                    </View>
                    <View style={{
                         width: "100%",
                         padding: 10,
                    }}>
                         <TouchableHighlight
                              underlayColor="#00000010"
                              onPress={() => {
                                   navigation.navigate("SecureScreenFour")
                              }}
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

export default SecureScreenSix