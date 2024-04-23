import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
export default function App() {
  const Stack = createNativeStackNavigator();
   
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
