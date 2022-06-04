import { StyleSheet, View } from 'react-native';
import BottomNavigation from './src/navigators/BottomNavigation';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Dashboard /> */}
        <BottomNavigation />
    </View>
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
