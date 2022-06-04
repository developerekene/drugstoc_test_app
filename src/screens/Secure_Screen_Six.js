import { ImageBackground, View, Text, Image, TouchableHighlight } from "react-native"


const SecureScreenSix = () => {
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
                         {/* <Text>
                              Position your camera at the middle
                         </Text> */}
                         <Image resizeMode="contain" source={require("../../assets/animation51.png")} style={{
                              width: 188,
                              height: 188,
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
                        CANCEL
                      </Text>
                    </View>
          </TouchableHighlight>
                    
               </ImageBackground>
          </>
     )
}

export default SecureScreenSix