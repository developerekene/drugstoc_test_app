import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

function GoBack({ navigation, title = "" }) {
    return (
        
            <View style={[styles.toolbar, {}]}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.goBack()
                }}>
                    <View style={{flexDirection: "row", alignItems: "center", position: "absolute", zIndex: 9999, left: 10}}>
                        <EvilIcons name="chevron-left" size={24} color="#999999" />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.toolbarTxt, {textAlign: "center", flex: 1, fontSize: 17, fontFamily: "Inter_500Medium", textAlign: "center",}]}>{title}</Text>
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