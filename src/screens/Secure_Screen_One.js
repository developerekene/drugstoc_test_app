import {View, Text, TouchableHighlight, Image} from "react-native"

const SecureScreenOne = () => {
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
                    marginTop: 48,
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

          <View style={{
               marginLeft: 50,
               marginTop: 30
          }}>
               <Image source={require("../../assets/Group.png")}/>
               <View style={{
                    position: "absolute"
               }}>
                    <Text style={{
                         color: "#4B70D6",
                         marginLeft: 80,
                         fontSize: 18
                    }}>
                         Add an Extra layer of security
                    </Text>
                    <Text style={{
                         color: "#484848",
                         marginLeft: 80,
                         fontSize: 15,
                         marginRight: 25, 
                         marginBottom: 30
                    }}>
                         make sure no one uses your account to make transactions with you knowing
                    </Text>
               </View>
          </View>
          <View style={{
                    marginTop: 50,
                    paddingLeft: 19
               }}>
                    <Text style={{
                         color: "#7C7C7C",
                         fontSize: 16
                    }}>
                         Select a preffered method for security
                    </Text>
          </View>
          <View style={{
               marginTop: 20
          }}>
               <Image style={{
                    marginLeft: 46
               }}source={require("../../assets/padlock1.png")}/>
               <Text style={{
                         position: "absolute",
                         fontSize: 18,
                         paddingLeft: 110,
                         fontWeight: "400",
                         color: "#151522"
                    }}>
                         Pin
               </Text>
               <Text style={{
                         position: "absolute",
                         fontSize: 14,
                         paddingLeft: 110,
                         fontWeight: "400",
                         color: "#5B5B5B",
                         paddingTop: 22
                    }}>
                         Lock suppliers credit with a pin
               </Text>

               <View style={{
                    alignItems: "center"
               }}>
                    <Image style={{
                         alignItems: "center",
                         marginTop: 25
                    }}source={require("../../assets/Line.png")}/>
               </View>
          </View>
          <View style={{
               marginTop: 20
          }}>
               <Image style={{
                    marginLeft: 40
               }}source={require("../../assets/face-id1.png")}/>
               <Text style={{
                         position: "absolute",
                         fontSize: 18,
                         paddingLeft: 110,
                         fontWeight: "400",
                         color: "#151522"
                    }}>
                         Pin
               </Text>
               <Text style={{
                         position: "absolute",
                         fontSize: 14,
                         paddingLeft: 110,
                         fontWeight: "400",
                         color: "#5B5B5B",
                         paddingTop: 22
                    }}>
                         Lock suppliers credit using your face
               </Text>

               <View style={{
                    alignItems: "center"
               }}>
                    <Image style={{
                         alignItems: "center",
                         marginTop: 25
                    }}source={require("../../assets/Line.png")}/>
               </View>
          </View>
          <View style={{
               marginTop: 20
          }}>
               <Image style={{
                    marginLeft: 40
               }}source={require("../../assets/smartphone1.png")}/>
               <Text style={{
                         position: "absolute",
                         fontSize: 18,
                         paddingLeft: 110,
                         fontWeight: "400",
                         color: "#151522"
                    }}>
                         Fingerprint
               </Text>
               <Text style={{
                         position: "absolute",
                         fontSize: 14,
                         paddingLeft: 110,
                         fontWeight: "400",
                         color: "#5B5B5B",
                         paddingTop: 22
                    }}>
                         Lock suppliers credit with fingerprint
               </Text>
               <View style={{
                    alignItems: "center"
               }}>
                    <Image style={{
                         alignItems: "center",
                         marginTop: 25
                    }}source={require("../../assets/Line.png")}/>
               </View>
               
          </View>

          <View style={{
               alignItems: "center"
          }}>
               <Image style={{
                         alignItems: "center",
                         marginTop: 160
                    }}source={require("../../assets/HomeIndicator.png")}/>
          </View>
          </>
          
     )
}

export default SecureScreenOne