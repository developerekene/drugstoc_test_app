import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, EvilIcons } from '@expo/vector-icons';


import ColorPalette from '../../constants/ColorPalette';
import NotificationIcon from '../../components/NotificationIcon';
import MobileSecurityIcon from '../../components/MobileSecurityIcon';


const accounts = [
    {
        id: "BNK5/2021/2590",
        amount: "1,000,000",
        status: "PAID",
        date: "Tue,5 Nov at 21:29"
    },
    {
        id: "BNK5/2021/2591",
        amount: "2,000,000",
        status: "PAID",
        date: "Tue,5 Nov at 21:29"
    },
    {
        id: "BNK5/2021/2592",
        amount: "10,500",
        status: "PAID",
        date: "Tue,5 Nov at 21:29"
    },
]

export default function Dashboard() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%",}}>
        <View style={styles.dashboardContainer}>
            <View style={styles.dashboardHeader}>
                <Text style={styles.welcomeText}>
                    Hi, Ola Pharmacy
                </Text>
                <NotificationIcon />
            </View>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.dashboardMainContainer}>
                    <View style={styles.dashboardViewPagerContainer}>
                        <PagerView style={styles.viewPager} initialPage={0} pageMargin={20} overdrag={true} >
                            <View style={styles.page} key="1">
                                <LinearGradient
                                    // Background Linear Gradient
                                    colors={['#547CD059', "#ececec", '#55DAB5']}
                                    start={{ x: 0.4, y: 0.0 }}
                                    end={{ x: 0.7, y: 0.7 }}
                                    locations={[0.1, 0.6, 1]}
                                    style={styles.background}
                                />
                                <View style={{padding: 20, flex: 1, justifyContent: "center"}}>
                                    <Text style={{paddingHorizontal: 10, fontSize: 14, fontFamily: "Inter_600SemiBold", color: ColorPalette.textPrimaryColor}}>YOUR SUPPLIER CREDIT</Text>
                                    <View style={{paddingHorizontal: 10, flexDirection: "row", alignItems: "center", marginTop: 20}}>
                                        <Text style={{fontSize: 13, fontFamily: "Inter_500Medium", color: ColorPalette.textPrimaryColor}}>Credit Due:</Text>
                                        <Text style={{fontSize: 17, fontFamily: "Inter_600SemiBold", color: ColorPalette.textPrimaryColor}}>₦3,000,000</Text>
                                    </View>
                                    <View style={{height: 1, width: "100%", backgroundColor: "#29AAF3", marginVertical: 10}}/>
                                    <View style={{paddingHorizontal: 10, flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{fontSize: 12, fontFamily: "Inter_500Medium", color: ColorPalette.textPrimaryColor}}>Credit Repayment Due: </Text>
                                        <Text style={{fontSize: 15, fontFamily: "Inter_500Medium", color: ColorPalette.textPrimaryColor}}>From Invoice Date</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={styles.viewPagerMakePurchaseBtn}>
                                            <View style={{backgroundColor: "#FFF", padding: 5, borderRadius: 50}}>
                                                <AntDesign name="plus" size={10} color="black" />
                                            </View>
                                            <Text style={{marginLeft: 5, fontSize: 10, fontFamily: "Inter_600SemiBold", color: ColorPalette.textPrimaryColor}}>MAKE PURCHASE</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.page, {backgroundColor: "#FFF"}]} key="2">
                                <View style={{padding: 20, flex: 1, justifyContent: "center"}}>
                                    <Text>Page 2</Text>
                                </View>
                            </View>
                        </PagerView>
                    </View>
                    <View style={styles.statementOfAccountHeader}>
                        <Text style={{
                            fontSize: "Inter_600SemiBold",
                            fontSize: 14,
                            color: ColorPalette.textPrimaryColor
                        }}>Statement of Account</Text>

                        <Text style={{
                            fontSize: "Inter_500Medium",
                            fontSize: 14,
                            color: "#4B70D6"
                        }}>View more</Text>
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                        <FlatList 
                            data={accounts}
                            keyExtractor={account => account.id}
                            renderItem={({ item }) => (
                                <View style={{padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <View style={{flex: 1}}>
                                        <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 5, justifyContent: "space-between"}}>
                                            <Text style={{fontFamily: "Inter_400Regular", fontSize: 15}}>{item.id}</Text>
                                            <Text style={{fontFamily: "Inter_500Medium", fontSize: 14, color: ColorPalette.colorSuccess}}>₦{item.amount}</Text>
                                        </View>
                                        <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 5, justifyContent: "space-between"}}>
                                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                                                <View style={{ width: 7, height: 7, borderRadius: 50, backgroundColor: ColorPalette.colorSuccess }} />
                                                <Text style={{fontFamily: "Inter_400Regular", fontSize: 13, marginLeft: 10}}>{item.status}</Text>
                                            </View>
                                            <Text style={{fontFamily: "Inter_500Medium", fontSize: 10, color: ColorPalette.textSecondaryColor}}>on {item.date}</Text>
                                        </View>
                                    </View>
                                    <EvilIcons name="chevron-right" size={24} color="black" />
                                </View>
                            )}
                            ItemSeparatorComponent={() => <View style={{width: "100%", height: 1, backgroundColor: "#E4E4E499"}} />}/>  
                    </View>
                    <View style={{padding: 10}}>
                        <View style={styles.dashboardBottomBanner}>
                            <View style={{flexDirection: "row", flex: 1, alignItems: "center"}}>
                                <MobileSecurityIcon />
                                <View style={{flex: 1, marginHorizontal: 5, justifyContent: "center",}}>
                                    <Text style={{fontFamily: "Inter_500Medium", fontSize: 16}}>Add an Extra Layer of Security</Text>
                                    <Text style={{fontFamily: "Inter_400Regular", fontSize: 13, flexShrink: 1 }}>make sure no one uses your account to make transcations without you knowing.</Text>
                                </View>
                            </View>
                            <View style={{width: 27, height: 27, backgroundColor: "#B2CDE3", borderRadius: 50, justifyContent: "center", alignItems: "center"}}>
                                <EvilIcons name="chevron-right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    dashboardContainer: {
        flex: 1,
    },
    dashboardHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingVertical: 20,
    },
    welcomeText: {
        fontSize: 20,
        fontFamily: "Inter_500Medium",
        color: ColorPalette.textPrimaryColor
    },
    dashboardMainContainer: {
        flex: 1,
    },
    dashboardViewPagerContainer: {
        width: "100%",
        height: 240,
        padding: 10,
    },
    viewPager: {
        flex: 1,
    },
    page: {
        flex: 1,
        shadowOffset: { width: 0, height: 2.5 },
        shadowColor: '#BEBEBE',
        shadowOpacity: 1,
        elevation: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 20,
        overflow: 'hidden',
    },
    viewPagerMakePurchaseBtn: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'flex-end',
        padding: 10,
        width: "auto",
        borderRadius: 50,
        backgroundColor: "#E0E6F6BF"
    },
    statementOfAccountHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    dashboardBottomBanner: {
        width: "100%",
        height: 160,
        borderRadius: 10,
        backgroundColor: "#D2E0EC",
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})