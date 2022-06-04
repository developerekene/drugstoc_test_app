import {View, Text, TouchableHighlight, Image, TextInput} from "react-native"

const SecureScreenTwo = () => {
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
                    marginTop: 40,
                    marginLeft: 20,
               }}>
                    <Image source={require("../../assets/leftarrow.png")}/>
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
                    Secure with a pin
               </Text>
          </View>
          <View style={{
               // alignItems: "center"
          }}>
               <View style={{
               // alignItems: "center",
               marginLeft: 110,
               marginTop: 60
          }}>
               <TextInput
               style={{
                    // alignItems: "center",
                    borderWidth: 0.5,
                    borderRadius: 8,
                    height: 45,
                    width: 45,
                    paddingLeft: 22
               }}/>
               <TextInput
               style={{
                    marginLeft: 50,
                    position: "absolute",
                    borderWidth: 0.5,
                    borderRadius: 8,
                    height: 45,
                    width: 45,
                    paddingLeft: 22
               }}/>
               <TextInput
               style={{
                    marginLeft: 100,
                    position: "absolute",
                    borderWidth: 0.5,
                    borderRadius: 8,
                    height: 45,
                    width: 45,
                    paddingLeft: 22
               }}/>
               <TextInput
               style={{
                    marginLeft: 150,
                    position: "absolute",
                    borderWidth: 0.5,
                    borderRadius: 8,
                    height: 45,
                    width: 45,
                    paddingLeft: 22
               }}/>
               
          </View>
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
                    fontSize: 18
               }}>
                    Enter your pin to lock credit
               </Text>
               <Text style={{
                    paddingTop: 20,
                    textAlign: "center",
                    paddingLeft: 40,
                    paddingRight: 40,
                    fontSize: 15
               }}>
                    You can use a pin authentication to confirm making payments through this app
               </Text>
          </View>
          <View>
          <TouchableHighlight
                    style={{ marginTop: 160, alignSelf: "stretch"}}>
                    <View
                      style={{
                        backgroundColor: "#979797",
                        height: 68,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 20,
                        marginRight: 20,
                        borderRadius: 40
                      }}
                    >
                      <Text style={{ color: "#FFF"}}>
                        COMFIRM PIN
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

export default SecureScreenTwo