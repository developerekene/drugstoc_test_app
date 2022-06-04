import { TouchableHighlight, View, Image, Text, TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ColorPalette from "../constants/ColorPalette";


const DrugstockCreditOne = () => {
     return(
          <SafeAreaView style={{
               flex: 1
          }}>
               <View style={{
                    paddingLeft: 10,
                    paddingVertical: 10
               }}>
                    <EvilIcons name="chevron-left" size={24} color="#999999" />
               </View>

               <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{flex: 1}}>
                         <View style={{
                              paddingVertical: 30,
                              justifyContent: "center",
                              alignItems: "center"
                         }}>
                              <Text style={{
                                   width: "50%",
                                   color: "#61656A",
                                   textAlign: "center",
                                   fontFamily: "Inter_500Medium",
                                   fontSize: 13,
                                   flexShrink: 1
                              }}>
                              Thank You for showing interest in Drugstoc-Sterling loan.
                              </Text>
                         </View>

                         <View style={{
                              paddingHorizontal: 10,
                         }}>
                              <Text style={{
                                   fontSize: 13,
                                   color: ColorPalette.textSecondaryColor,
                                   fontFamily: "Inter_500Medium",
                              }}>
                                   Provide Details
                              </Text>

                              <View style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   borderWidth: 0.5,
                                   borderColor: "#4B70D6",
                                   borderRadius: 8,
                                   padding: 15,
                                   marginTop: 20,
                                   marginBottom: 20
                              }}>
                                   <Text style={{
                                        color: ColorPalette.textSecondaryColor,
                                        fontFamily: "Inter_500Medium",
                                        fontSize: 14
                                   }}>NGN</Text>
                                   <TextInput 
                                   placeholder="3,000 000"
                                   style={{
                                        flex: 1,
                                        marginLeft: 10
                                   }}/>
                              </View>

                              <View style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   borderWidth: 0.5,
                                   borderColor: "#4B70D6",
                                   borderRadius: 8,
                                   padding: 15,
                                   marginBottom: 20
                              }}>
                                   <TextInput 
                                   placeholder="2 Months"
                                   style={{
                                        flex: 1
                                   }}/>
                                   <EvilIcons name="chevron-down" size={24} color="#3F414E" />
                              </View>

                              <View style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   borderWidth: 0.5,
                                   borderColor: "#4B70D6",
                                   borderRadius: 8,
                                   padding: 15,
                                   marginBottom: 20
                              }}>
                                   <TextInput 
                                   placeholder="Restock"
                                   style={{
                                        flex: 1
                                   }}/>
                                   <EvilIcons name="chevron-down" size={24} color="#3F414E" />
                              </View>

                              <View style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   borderWidth: 0.5,
                                   borderColor: "#DDDDDD",
                                   borderRadius: 8,
                                   padding: 15,
                                   marginBottom: 20
                              }}>
                                   <TextInput 
                                   placeholder="Emter your BVN (Optional)" />
                              </View>
                         </View>
                    </View>

                    <View style={{
                         padding: 10
                    }}>
                         <TouchableHighlight
                              underlayColor="#b5363b"
                              onPress={() => {}}
                              style={{
                                   backgroundColor: "#DB353A",
                                   height: 48,
                                   justifyContent: "center",
                                   alignItems: "center",
                                   borderRadius: 20
                              }}
                              >
                              <View>
                              <Text style={{ color: "#FFF"}}>
                              NOTIFY ME
                              </Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>

          
          </SafeAreaView>
          
     )
}

export default DrugstockCreditOne