import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_900Black, Inter_500Medium, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';

import OrganizerApp from "./OrganizerApp";
import Dashboard from './src/screens/Dashboard';
import DrugstockCreditOne from './src/screens/drugstoc_credit_one';
import DrugstockCreditThree from './src/screens/drugstoc_credit_three';
import DrugstockCreditTwo from './src/screens/drugstoc_credit_two';
import SecureScreenOne from './src/screens/Secure_Screen_One';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {/* <DrugstockCreditThree /> */}
      {/* <DrugstockCreditTwo /> */}
      {/* <DrugstockCreditOne /> */}
      <SecureScreenOne />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
