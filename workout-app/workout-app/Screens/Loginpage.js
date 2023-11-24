import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/Image/gym5.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image
            source={require('../assets/Image/Women_P-removebg-preview.png')}
            style={styles.image}
          />

          <Text style={styles.text}>Women Power</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('In')} style={styles.button}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Up')} style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine} />
          <Text style={styles.orText}>Or Continue With</Text>
          <View style={styles.horizontalLine} />



          <View style={styles.iconsContainer}>

            <Image
              source={require('../assets/Image/Google.jpg')}
              style={styles.icon}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'rgba(255, 255, 255, 0.7)',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '50%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 30,
    color: '#F609DF',
    marginBottom: 100,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    margin: 35,
    borderRadius: 50,
  },
  buttonText: {
    color: '#ED1DBF',
    fontSize: 30,
  },
  orText: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
    paddingTop: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  icon: {
    marginHorizontal: 40,
    borderRadius: 30,
    height: 50,
    width: 50,
  },
});

export default LoginPage;
