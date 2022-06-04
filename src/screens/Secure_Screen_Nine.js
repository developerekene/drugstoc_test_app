import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"

const SecureScreenNine = () => {
     return(
          <>
          <View style={{
               marginTop: 40,
               paddingLeft: 15,
               alignItems: "center"
          }}>
               <Text style={{
                    fontSize: 17,
                    fontWeight: "400",

               }}>
                    Security
               </Text>
          </View>

          <View style={{
               marginTop: 20
          }}>
               <Image source={require("../../assets/Vector10.png")}/>
          </View>
          
               <View style={{
               alignItems: "center",
               // marginLeft: 110,
               marginTop: 220
          }}>
               <Image source={require("../../assets/animation50.png")}/>
               
          </View>
          
          <View style={{
               alignItems: "center",
               marginTop: 0
          }}>
               
               
          </View>
          <View style={{
               alignItems: "center",
               paddingTop: 80
          }}>
               <Text style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#979797",
                    marginTop: 60
               }}>
                    Touch the fingerpring sensor
               </Text>
          </View>
          <View>
          <TouchableHighlight
                    style={{ marginTop: 20, alignSelf: "stretch"}}>
                    <View
                      style={{
                        backgroundColor: "#4B70D6",
                        height: 68,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 20,
                        marginRight: 20,
                        borderRadius: 40
                      }}
                    >
                      <Text style={{ color: "#FFF"}}>
                        GET STARED
                      </Text>
                    </View>
          </TouchableHighlight>
          </View>
          <View style={{
               marginTop: 10,
               alignItems: "center"
          }}>
               <Image source={require("../../assets/HomeIndicator.png")}/>
          </View>

          </>
          
     )
}

export default SecureScreenNine