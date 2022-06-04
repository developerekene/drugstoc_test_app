import {View, Text, TouchableHighlight, Image} from "react-native"

const SecureScreenTen = () => {
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
          <TouchableHighlight style={{
               position: "absolute",
               alignItems: "flex-end"
          }}>
               <View style={{
                    marginTop: 46,
                    marginLeft: 380,
               }}>
                    <Image source={require("../../assets/close1.png")}/>
               </View>
          </TouchableHighlight>

          <View style={{
               marginTop: 20
          }}>
               <Image source={require("../../assets/Vector10.png")}/>
          </View>

          <View>
               <Text style={{
                    textAlign: "center",
                    paddingTop: 25,
                    color: "#181725",
                    fontWeight: "600",
                    fontSize: 18
               }}>
                    Setup fingerprint
               </Text>
          </View>
          
               <View style={{
               alignItems: "center",
               // marginLeft: 110,
               marginTop: 80
          }}>
               <Image style={{
                    // borderRadius: "50%"
               }}source={require("../../assets/smartphonenew2.png")}/>
               
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
                    color: "#068D68",
                    marginTop: 20
               }}>
                    All Good!
               </Text>
               <Text style={{
                    paddingTop: 20,
                    textAlign: "center",
                    paddingLeft: 40,
                    paddingRight: 40,
                    fontSize: 15
               }}>
                    You can use your fingerprint to confirm making payments through the app.
               </Text>
          </View>
          <View>
          <TouchableHighlight
                    style={{ marginTop: 130, alignSelf: "stretch"}}>
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
                        DONE
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

export default SecureScreenTen