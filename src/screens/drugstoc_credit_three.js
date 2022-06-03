import {View, Image, Text, TouchableHighlight} from "react-native"

const DrugstockCreditThree = () => {
     return(
          <>
          <View style={{
               alignItems: 'center',
               marginTop: 120,
          }}>
               <Image source={require('../../assets/image1.png')}/>
          </View>
          <View style={{
               marginTop: 60,
               marginLeft: 40,
               marginRight: 40
          }}>
               <Text style={{
                    textAlign:'center',
                    fontSize: 20,
                    fontWeight: "400",
                    lineHeight: 24,
                    letterSpacing: 1.5
               }}>Hey, your loan application was successfull</Text>
          </View>
          <View style={{
               marginTop: 30,
               marginLeft: 50,
               marginRight: 50
          }}>
          <Text style={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 22,
                    letterSpacing: 1,
                    color: "#90ee90"
               }}>
                    Congrats!!!
               </Text>
          </View>
          <View>
          <TouchableHighlight
                    style={{ marginTop: 130, alignSelf: "stretch"}}>
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
                        ALRIGHTY, GOT IT
                      </Text>
                    </View>
                  </TouchableHighlight>
          </View>
          <View style={{
               justifyContent: "center",
               alignItems: "center",
               marginTop: 10
          }}>
               <Image source={require('../../assets/HomeIndicator.png')}/>
          </View>
          </>
     )
}

export default DrugstockCreditThree