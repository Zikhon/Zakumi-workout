

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LandingPage from './Screens/LandingPage'; 
import Loginpage from './Screens/Loginpage'; 
import SignUp from './Screens/SignUp'; 
import SignIn from './Screens/SignIn'; 
import Training1 from './Screens/Training1';
import Training2 from './Screens/Training2';


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
         <Stack.Screen
          options={{ headerShown: false }}
          name="Up"
          component={SignUp} 
        />
          <Stack.Screen
          options={{ headerShown: false }}
          name="In"
          component={SignIn} 
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Loginpage}
        />
          <Stack.Screen
          options={{ headerShown: false }}
          name="One"
          component={Training1}
        />
           <Stack.Screen
          options={{ headerShown: false }}
          name="One"
          component={Training2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}