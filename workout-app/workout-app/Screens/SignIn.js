import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/Image/gym5.jpg')} 
                style={styles.backgroundImage}
            >
            <View style={styles.overlay}>
                <Image
                    source={require('../assets/Image/Women_P-removebg-preview.png')}
                    style={styles.image}
                />

                <Text style={styles.Text}>Email</Text>
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
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.Text}>
                        Don't have an account?{' '}
                        <Text onPress={() => navigation.navigate('Up')} style={styles.Text1}>
                            Sign Up
                        </Text>
                    </Text>
                </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
      },
    
    Text: {
        paddingRight: 25,
        color: '#ED1DBF',
        fontSize: 18,
        marginTop: 55,
    },
    Text1: {
        paddingRight: 250,
        color: 'black',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 70,
        borderRadius: 50,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 25,
        paddingLeft: 10,
        borderRadius: 50,
    },
    forgetPasswordText: {
        color: '#000000',
        paddingLeft: 250,
        fontSize: 18,
        fontWeight: 'bold',

     
    },
    button: {
        backgroundColor: '#F1E2F1',
        padding: 2,
        borderRadius: 50,
        marginTop: 85,
        width: '100%',
    },
    buttonText: {
        color: '#ED1DBF',
        textAlign: 'center',
        fontSize: 35,
    },
});

export default SignIn;
