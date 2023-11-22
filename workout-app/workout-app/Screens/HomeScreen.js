import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login');
    }, 2000); 

    return () => clearTimeout(loadingTimer); 
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/Image/gym5.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
         
          <Text style={styles.text}>WOMEN POWER</Text>
          <Text style={styles.text2}>You Can Do This!!!</Text>

      
          {isLoading && (
            <ActivityIndicator size="large" color="#ED1DBF" style={styles.loadingBar} />
          )}
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
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  text: {
    fontSize: 24,
    color: '#ED1DBF',
    margin: 20,
  },
  text2: {
    fontSize: 15,
    color: '#ED1DBF',
  },
  loadingBar: {
    marginTop: 20,
  },
});

export default HomeScreen;
