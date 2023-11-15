import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, handleImagePress,
   View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
    <TouchableOpacity onPress={handleImagePress}>
    <Image 
    style={{borderRadius: 50,
    width:100,
    height: 100, }}
   source={require("./assets/Image/Women_P-removebg-preview.png")}
    />
    </TouchableOpacity>
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
