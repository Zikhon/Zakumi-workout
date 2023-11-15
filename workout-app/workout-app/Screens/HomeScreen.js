// HomeScreen.js

import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleImagePress = () => {
    // Navigate to the 'LandingPage' screen when the button is pressed
    navigation.navigate('LandingPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleImagePress}>
          <Image 
            style={{
              borderRadius: 50,
              width: 100,
              height: 100,
            }}
            source={require('./assets/Image/Women_P-removebg-preview.png')}
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

export default HomeScreen;
