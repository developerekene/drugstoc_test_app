import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import OrdersIcon from "../components/OrdersIcon";
import UserIcon from '../components/UserIcon';
import WalletIcon from '../components/WalletIcon';
import FastOrderIcon from '../components/FastOrderIcon/FastOrderIcon';
import HomeIcon from '../components/HomeIcon/HomeIcon';
import Dashboard from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

export default function BottomNavigation({ navigation }) {
  return (
    <View style={{width: "100%", height: "100%", backgroundColor: "black"}}>
        <Tab.Navigator
            safeAreaInsets={{
                bottom: 5
            }}
            initialRouteName="Credit"
            screenOptions={({ route }) => ({
                tabBarStyle: { height: 75 },
                tabBarLabelStyle: {
                    fontSize: 12
                },
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconComponent;
                    let iconName;
                    let rn = route.name;

                    if (rn === "Home") {
                        iconName = focused ? "wallet-outline" : "wallet";
                        color = focused ? "#FFF" : color;
                        iconComponent = <HomeIcon stroke={color} fill={color}/>
                    } else if (rn === "Fast Order") {
                        iconName = focused ? "wallet-outline" : "wallet";
                        color = focused ? "#FFF" : color;
                        iconComponent = <FastOrderIcon stroke={color} fill={color}/>
                    } else if (rn === "Credit") {
                        iconName = focused ? "wallet-outline" : "wallet";
                        color = focused ? "#FFF" : color;
                        iconComponent = <WalletIcon stroke={color} fill={color}/>
                    } else if (rn === "Orders") {
                        iconName = focused ? "shopping" : "shopping-outline";
                        color = focused ? "#FFF" : color;
                        iconComponent = <OrdersIcon stroke={color} fill={color}/>
                    } else if (rn === "Account") {
                        iconName = focused ? "account" : "account";
                        color = focused ? "#FFF" : color;
                        iconComponent = <UserIcon stroke={color} fill={color}/>
                    }

                    // You can return any component that you like here!
                    return (
                        <View style={{
                            backgroundColor: focused ? "#4B70D6" : "transparent",
                            height: 46,
                            width: 46,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 15,
                            marginBottom: 5
                        }}>
                            { iconComponent }
                        </View>
                    )
                },
                activeTintColor: "#A0A3B1",
                inactiveTintColor: "#A0A3B1",
                labelStyle: { paddingBottom: 10, paddingTop: 10, fontSize: 12, },
                style: { padding: 10, height: 70 },
            })}
            >
                <Tab.Screen name="Home" children={() => <Text>Home</Text>} />
                <Tab.Screen name="Fast Order" children={() => <Text>Fast Order</Text>} />
                <Tab.Screen name="Credit" children={() => <Dashboard stackNavigation={navigation} />} />
                <Tab.Screen name="Orders" children={() => <Text>Order</Text>} />
                <Tab.Screen name="Account" children={() => <Text>Account</Text>} />
        </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({})