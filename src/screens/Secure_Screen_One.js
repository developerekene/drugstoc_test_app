import {View, Text, TouchableHighlight, Image} from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import MobileSecurityIcon from "../components/MobileSecurityIcon";
import ColorPalette from "../constants/ColorPalette";
import PadLockIcon from "../components/PadLockIcon";
import FingerPrintIcon38 from "../components/FingerPrintIcon38";
import FaceIdIcon36 from "../components/FaceIdIcon36";

const SecureScreenOne = ({ navigation }) => {
     return(
          <View style={{flex: 1, backgroundColor: "#FFF"}}>
               <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 40,
                    paddingVertical: 20,
                    justifyContent: "space-between",
                    alignItems: "flex-start"
               }}>
                    <MobileSecurityIcon />
                    <View style={{
                         flex: 1,
                         marginLeft: 10
                    }}>
                         <Text style={{
                              color: "#4B70D6",
                              fontSize: 15,
                              fontFamily: "Inter_500Medium",
                              marginBottom: 10
                         }}>
                              Add an Extra layer of security
                         </Text>
                         <Text style={{
                              color: "#484848",
                              fontSize: 13,
                              fontFamily: "Inter_400Regular"
                         }}>
                              make sure no one uses your account to make transcations without you knowing.
                         </Text>
                    </View>
               </View>

               <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10
               }}>
                    <Text style={{
                         color: ColorPalette.textSecondaryColor,
                         fontSize: 15,
                         fontFamily: "Inter_500Medium",
                         lineHeight: 25
                    }}>
                         Select a preffered method for security
                    </Text>
               </View>

               <View style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10
               }}>
                    <TouchableHighlight underlayColor="rgba(116, 116, 116, 0.2)" onPress={() => {
                         navigation.navigate("SecureScreenTwo")
                    }}>
                         <View style={{
                              flexDirection: "row",
                              paddingHorizontal: 40,
                              paddingVertical: 20
                         }}>
                              <PadLockIcon />
                              <View style={{marginLeft: 20}}>
                                   <Text style={{
                                             fontSize: 18,
                                             fontFamily: "Inter_400Regular",
                                             color: "#151522",
                                             marginBottom: 5
                                        }}>
                                             Pin
                                   </Text>
                                   <Text style={{
                                             fontSize: 12,
                                             fontFamily: "Inter_400Regular",
                                             color: "#5B5B5B",
                                        }}>
                                             Lock suppliers credit with a pin
                                   </Text>
                              </View>

                         </View>
                    </TouchableHighlight>
                    <View style={{
                         marginVertical: 10,
                         height: 1,
                         width: "100%",
                         backgroundColor: "#E4E4E499"
                    }} />

                    <TouchableHighlight underlayColor="rgba(116, 116, 116, 0.2)" onPress={() => {
                         
                    }}>
                         <View style={{
                              flexDirection: "row",
                              paddingHorizontal: 40,
                              paddingVertical: 20
                         }}>
                              <FaceIdIcon36 />
                              <View style={{marginLeft: 20}}>
                                   <Text style={{
                                             fontSize: 18,
                                             fontFamily: "Inter_400Regular",
                                             color: "#151522",
                                             marginBottom: 5
                                        }}>
                                             Face unlock
                                   </Text>
                                   <Text style={{
                                             fontSize: 12,
                                             fontFamily: "Inter_400Regular",
                                             color: "#5B5B5B",
                                        }}>
                                        Lock suppliers credit using your face
                                   </Text>
                              </View>

                         </View>
                    </TouchableHighlight>
                    <View style={{
                         marginVertical: 10,
                         height: 1,
                         width: "100%",
                         backgroundColor: "#E4E4E499"
                    }} />

                    <TouchableHighlight underlayColor="rgba(116, 116, 116, 0.2)" onPress={() => {
                         
                    }}>
                         <View style={{
                              flexDirection: "row",
                              paddingHorizontal: 40,
                              paddingVertical: 20
                         }}>
                              <FingerPrintIcon38 />
                              <View style={{marginLeft: 20}}>
                                   <Text style={{
                                             fontSize: 18,
                                             fontFamily: "Inter_400Regular",
                                             color: "#151522",
                                             marginBottom: 5
                                        }}>
                                             Fingerprint
                                   </Text>
                                   <Text style={{
                                             fontSize: 12,
                                             fontFamily: "Inter_400Regular",
                                             color: "#5B5B5B",
                                        }}>
                                        Lock suppliers credit using fingerprint
                                   </Text>
                              </View>
                         </View>
                    </TouchableHighlight>
                    <View style={{
                         marginVertical: 10,
                         height: 1,
                         width: "100%",
                         backgroundColor: "#E4E4E499"
                    }} />
               </View>
          </View>
          
     )
}

export default SecureScreenOne