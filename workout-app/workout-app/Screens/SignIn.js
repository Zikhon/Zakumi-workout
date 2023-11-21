import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/Image/backgroung picture.jpg')} 
                style={styles.backgroundImage}
            >
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
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
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
        fontSize: 35,
    },
});

export default SignIn;
