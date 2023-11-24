import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/Image/main.webp')} 
                style={styles.backgroundImage}
            >
            <View style={styles.overlay}>
                <Image
                    source={require('../assets/Image/Women_P-removebg-preview.png')}
                    style={styles.image}
                />

              <ScrollView 
              style={styles.ScrollView}
              contentContainerStyle={styles.ScrollViewContent}
                    showsVerticalScrollIndicator={false}

              >
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    placeholderTextColor="#ED1DBF"
                />

    
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#ED1DBF"
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
                </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ScrollView: {
      marginTop: 20,
    },
    ScrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',

   
      },
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        paddingBottom: 100,
      },
    
      Text: {
        marginLeft: 15, 
        color: '#ED1DBF',
        fontSize: 18,
        textAlign: 'center', 
    },
    
    Text1: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 70,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 40,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 25,
        borderRadius: 40,
        marginTop: 50 ,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10,
    },
    forgetPasswordText: {
        color: '#000000',
        paddingLeft: 250,
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#D9D9D9',
        margin: 50,
        borderRadius: 50,
        marginTop: 85,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ED1DBF',
        textAlign: 'center',
        fontSize: 35,
    },
});

export default SignIn;
