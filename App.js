import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from './src/screens/Discover';
import SawBuck from './src/screens/SawBuck';
import Invest from './src/screens/Invest';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <AuthStack.Screen name="Discover" component={Discover} />
        <AuthStack.Screen name="SawBuck" component={SawBuck} />
        <AuthStack.Screen name="Invest" component={Invest} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}