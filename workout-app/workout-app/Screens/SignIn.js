import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <Image
        source={require('../assets/Image/Women_P-removebg-preview.png')}
        style={styles.image}
      />

    <Text style={styles.Text}>Email/Username</Text>
      <TextInput
        style={styles.input}
      />

      

      <Text style={styles.Text}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
      />

      
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>

  
      <TouchableOpacity onPress={() => navigation.navigate('One')} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

       
      <TouchableOpacity onPress={() => navigation.navigate('Up')} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
   
  },
  Text: {
    paddingRight: 250,
    color: '#ED1DBF',
    fontSize: 18,
    marginTop: 40,

  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 70,
    borderRadius: 50,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
    borderRadius: 50,
  },
  forgetPasswordText: {
    color: '#000000',
    marginBottom: 10,
    paddingLeft: 200,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#F1E2F1',
    padding: 10,
    borderRadius: 50,
    marginTop: 85,

  },
  buttonText: {
    color: '#ED1DBF',
    textAlign: 'center',
    fontSize:35,
  },
});

export default SignIn;
