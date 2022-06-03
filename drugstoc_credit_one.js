import { TouchableHighlight, View, Image, Text, TextInput } from "react-native"


const DrugstockCreditOne = () => {
     return(
          <>
          <TouchableHighlight>
               <View style={{
                    marginTop: 50,
                    marginLeft: 10
               }}>
                    <Image source={require("./assets/leftarrow.png")}/>
               </View>
          </TouchableHighlight>

          <View style={{
               marginTop: 30,
               marginLeft: 60,
               marginRight: 60,
          }}>
               <Text style={{
                    textAlign: "center",
                    lineHeight: 22.11,
                    fontWeight: "300",
                    letterSpacing: 0.5
               }}>
                    Thank you for showing Interest in Drugstoc-Sterling loan
               </Text>
          </View>
          <View style={{
               marginLeft: 10,
               marginTop: 25
          }}>
               <Text style={{
                    fontSize: 13,
                    paddingLeft: 15,
                    lineHeight: 18,
                    color: "#484848"
               }}>
                    Provide Details
               </Text>

               <TextInput 
               placeholder="NGN"
               style={{
                    borderWidth: 0.5,
                    height: 60,
                    borderColor: "#4B70D6",
                    marginTop: 25,
                    marginStart: 15,
                    marginEnd: 25,
                    paddingLeft: 20,
                    borderRadius: 8,
               }}>
                    {/* <Text style={{
                         paddingRight: 15
                    }}>
                         NGN
                    </Text> */}
               </TextInput>

               <TextInput 
               placeholder="2 Months"
               style={{
                    borderWidth: 0.5,
                    height: 60,
                    borderColor: "#4B70D6",
                    marginTop: 25,
                    marginStart: 15,
                    marginEnd: 25,
                    paddingLeft: 20,
                    borderRadius: 8,
               }}>
                    {/* <Text style={{
                         paddingRight: 15
                    }}>
                         NGN
                    </Text> */}
               </TextInput>
               <TextInput 
               placeholder="Restock"
               style={{
                    borderWidth: 0.5,
                    height: 60,
                    borderColor: "#4B70D6",
                    marginTop: 25,
                    marginStart: 15,
                    marginEnd: 25,
                    paddingLeft: 20,
                    borderRadius: 8,
               }}>
                    {/* <Text style={{
                         paddingRight: 15
                    }}>
                         NGN
                    </Text> */}
               </TextInput>
               <TextInput 
               placeholder="Emter your BVN (Optional)"
               style={{
                    borderWidth: 0.5,
                    height: 60,
                    borderColor: "#DDDDDD",
                    marginTop: 25,
                    marginStart: 15,
                    marginEnd: 25,
                    paddingLeft: 20,
                    borderRadius: 8,
               }}>
                    {/* <Text style={{
                         paddingRight: 15
                    }}>
                         NGN
                    </Text> */}
               </TextInput>
          </View>

          <View>
               <TouchableHighlight
                    style={{ marginTop: 80, alignSelf: "stretch"}}>
                    <View
                      style={{
                        backgroundColor: "#DB353A",
                        height: 48,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 20,
                        marginRight: 20,
                        borderRadius: 20
                      }}
                    >
                      <Text style={{ color: "#FFF"}}>
                        NOTIFY ME
                      </Text>
                    </View>
                  </TouchableHighlight>
          </View>
          <View style={{
               justifyContent: "center",
               alignItems: "center",
               marginTop: 10
          }}>
               <Image source={require('./assets/HomeIndicator.png')}/>
          </View>
          
          </>
          
     )
}

export default DrugstockCreditOne