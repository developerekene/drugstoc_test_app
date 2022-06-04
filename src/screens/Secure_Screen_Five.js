import { ImageBackground, View, Text, Image, TouchableHighlight } from "react-native"


const SecureScreenFive = () => {
     return(
          <>
          
               
               <ImageBackground source={require("../../assets/jason-yoder.png")} resizeMode="cover"
               style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",

               }}>
                    <View style={{
                         position: "absolute",
                         alignItems: "center",
                         top: 50
                    }}>
                         <Text>
                              Position your camera at the middle
                         </Text>
                         <Image resizeMode="contain" source={require("../../assets/face-id3.png")} style={{
                              width: 100,
                              height: 100,
                              marginTop: 220
                         }}/>
                    </View>
          <TouchableHighlight
                    style={{ marginTop: 20, alignSelf: "stretch", marginLeft: 20, marginRight: 20}}>
                    <View
                      style={{
                        height: 68,
                        justifyContent: "center",
                        borderRadius: 40,
                        width: "100%",
                        borderColor: "#fff",
                        borderWidth: 2
                      }}
                    >
                      <Text style={{ color: "#FFF", textAlign: "center"}}>
                        DONE
                      </Text>
                    </View>
          </TouchableHighlight>
                    
               </ImageBackground>
          </>
     )
}

export default SecureScreenFive