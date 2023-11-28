import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();

    return (<SafeAreaView  style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">

        <Image
            source={require('../assets/Image/Women_P-removebg-preview.png')}
            style={styles.image}
        />
        <View>
        <ImageBackground
                source={require('../assets/Image/image1.jpg')} 
                style={styles.backgroundImage}
            >
            <ScrollView>
       
                <Text style={styles.Text}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                />
                <Text style={styles.Text}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                />

                <Text style={styles.Text}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                />

                <Text style={styles.Text}>Height and Weight</Text>
                <TextInput
                    style={styles.input}
               
                />

                <Text style={styles.Text}>Medical Condition</Text>
                <TextInput
                    style={styles.input}
               
                />

                <TouchableOpacity onPress={() => navigation.navigate('In')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate('In')} style={styles.haveAccountText}>
                    Already have an account?
                </Text>
            </ScrollView>
          
        
          </ImageBackground>
          </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 150,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 70,
        borderRadius: 50,
        top: 35,
        zIndex: 1,
    },
    backgroundImage: {
        resizeMode: 'cover',
    

   
      },
    Text: {
        paddingRight: 250,
        color: '#ED1DBF',
        fontSize: 18,
        marginTop: 40,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 50,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F1E2F1',
        padding: 10,
        borderRadius: 50,
        marginTop: 20,
    },
    buttonText: {
        color: '#ED1DBF',
        textAlign: 'center',
        fontSize: 35,
    },
    haveAccountText: {
        marginTop: 20,
        fontSize: 20,
        paddingLeft: 200,
    },
});

export default SignUp;
