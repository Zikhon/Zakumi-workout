import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, SafeAreaView,handleImagePress } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    console.log('Image Pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
          <Image
            style={{
              borderRadius: 50,
              width: 100,
              height: 100,
            }}
            source={require('../assets/Image/Women_P-removebg-preview.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    // color: 'white',
    fontSize: 16,
  },
});

export default LandingPage;
