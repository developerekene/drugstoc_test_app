import {View, Image, Text, Button, TouchableHighlight} from "react-native"

const DrugstockCreditTwo = () => {
     return(
          <>
          <View style={{
               alignItems: 'center',
               marginTop: 120,
          }}>
               <Image source={require('./assets/image1.png')}/>
          </View>
          <View style={{
               marginTop: 40,
               marginLeft: 40,
               marginRight: 40
          }}>
               <Text style={{
                    textAlign:'center',
                    fontSize: 22,
                    fontWeight: "400",
                    lineHeight: 24,
                    letterSpacing: 1.5
               }}>We've noted your interest, we will notify you when this feature is live.</Text>
          </View>
          <View style={{
               marginTop: 50,
               marginLeft: 50,
               marginRight: 50
          }}>
          <Text style={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 22,
                    letterSpacing: 1
               }}>
                    Users should be able to see repayment plan
               </Text>
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
               <Image source={require('./assets/HomeIndicator.png')}/>
          </View>
          </>
     )
}

export default DrugstockCreditTwo