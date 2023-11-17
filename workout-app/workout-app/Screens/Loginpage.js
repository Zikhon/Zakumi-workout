import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you have FontAwesome icons installed

const LoginPage = () => {
  return (
    <View style={styles.container}>
      {/* Icon at the top center */}
      <FontAwesome name="user-circle" size={50} color="#ED1DBF" style={styles.icon} />

      {/* "Women Power" text in the middle */}
      <Text style={styles.text}>Women Power</Text>

      {/* Sign In and Sign Up buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Text "or continue with" */}
      <Text style={styles.orText}>or continue with</Text>

      {/* Icons for Google, Facebook, and Email */}
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
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#ED1DBF',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ED1DBF',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    fontSize: 16,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
});

export default LoginPage;
