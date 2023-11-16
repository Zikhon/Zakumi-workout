import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground onPress={() => navigation.navigate('Login')}
        source={require('../assets/Image/gym5.jpg')}
        style={styles.backgroundImage}
      >
      </ImageBackground>
        <View>
        <Text style={styles.text}>WOMEN POWER</Text>
          <Text style={styles.text2}>You Can Do This!!!</Text>
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // color: ,
  },
  backgroundImage: {
    // flex: 1,
    resizeMode: 'cover',
    height: 100, 
    width: 100,

  },
  text: {
    fontSize: 24,
    color: '#ED1DBF', 
    margin: 20,
  },
  text2: {
    fontSize: 15,
    color: '#ED1DBF', 
  },
});

export default HomeScreen;
