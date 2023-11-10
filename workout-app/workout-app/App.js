import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
    <Text>Women Power</Text>
    <Image
      source={"workout-app/workout-app/assets/Image/Women_P-removebg-preview.png"}
    />
    </View>
    </SafeAreaView>
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
