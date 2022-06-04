import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

function GoBack({ navigation, title = "", back=true, close=false }) {
    return (
        
            <View style={[styles.toolbar, {borderBottomColor: "#E2E2E2B2", borderBottomWidth: 1}]}>
                {
                    back && <TouchableWithoutFeedback onPress={() => {
                        navigation.goBack()
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center", position: "absolute", zIndex: 9999, left: 10}}>
                            <EvilIcons name="chevron-left" size={24} color="#999999" />
                        </View>
                    </TouchableWithoutFeedback>
                }
                <Text style={[styles.toolbarTxt, {textAlign: "center", flex: 1, fontSize: 17, fontFamily: "Inter_500Medium", textAlign: "center",}]}>{title}</Text>
                {
                    close && <TouchableWithoutFeedback onPress={() => {
                        navigation.goBack()
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center", position: "absolute", zIndex: 9999, right: 10}}>
                        <EvilIcons name="close" size={24} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                }
            </View>
    );
}

const styles = StyleSheet.create({
    toolbar: {
      width: "100%",
      height: 68,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white"
    },
});

export default GoBack;