

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LandingPage from './Screens/LandingPage'; 
import Loginpage from './Screens/Loginpage'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={LandingPage} 
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen} 
        />
         {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Sign"
          component={SignupScreen} 
        /> */}
         <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Loginpage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}