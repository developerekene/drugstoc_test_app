import {View, Image, Text, Button, TouchableHighlight} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const DrugstockCreditTwo = ({ navigation }) => {
     return(
          <View style={{
               flex: 1,
               justifyContent: "space-between",
               backgroundColor: "#FFF"
          }}>
               <View style={{
                    flex: 1,
                    justifyContent: "center"
               }}>
                    <View style={{
                         alignItems: 'center',
                    }}>
                         <Image source={require('../../assets/image1.png')}/>
                    </View>
                    <View style={{
                         padding: 20,
                         justifyContent: "center",
                         alignItems: "center"
                    }}>
                         <Text style={{
                              textAlign:'center',
                              fontSize: 17,
                              fontFamily: "Inter_400Regular",
                              lineHeight: 24,
                              letterSpacing: 1.5,
                         }}>We've have noted your interest, we will notify you when this feature is live.
                         </Text>
                    </View>
                    <View style={{
                         padding: 20
                    }}>
                         <Text style={{
                              textAlign: 'center',
                              fontFamily: "Inter_600SemiBold",
                              fontSize: 18,
                              lineHeight: 22,
                              letterSpacing: 1
                         }}>
                              Users should be able to see repayment plan
                         </Text>
                    </View>
               </View>
               <View style={{padding: 10}}>
                    <TouchableHighlight
                         underlayColor="#b5363b"
                         onPress={() => {
                              
                         }}
                         style={{
                              backgroundColor: "#DB353A",
                              height: 48,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 20
                         }}>
                         <View>
                              <Text style={{ color: "#FFF", fontFamily: "Inter_500Medium" }}>
                              ALRIGHTY, GOT IT
                              </Text>
                         </View>
                    </TouchableHighlight>
               </View>
          </View>
     )
}

export default DrugstockCreditTwo