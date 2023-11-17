import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons'; 

const LoginPage = () => {
  return (
    <View style={styles.container}>
   
      <Image
        source={require('../assets/Image/Women_P-removebg-preview.png')}
        style={styles.image}
      />

   
      <Text style={styles.text}>Women Power</Text>

      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.orText}>Or Continue With</Text>

     
      <View style={styles.iconsContainer}>
        <FontAwesome name="google" size={30} color="#ED1DBF" style={styles.icon} />
        <FontAwesome name="facebook" size={30} color="#ED1DBF" style={styles.icon} />
        <FontAwesome name="envelope" size={30} color="#ED1DBF" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 100,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom:100,
    borderRadius: 50,
  },
  text: {
    fontSize: 30,
    color: '#F609DF',
    marginBottom: 100,
    textAlign: 'center', 
  },
  buttonsContainer: {
    flexDirection: 'flex',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#F1E2F1',
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
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 5, 
  },
  icon: {
    marginHorizontal: 40,
  },
});

export default LoginPage;
