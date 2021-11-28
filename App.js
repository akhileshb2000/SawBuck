import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Feed from './src/screens/Feed/Feed';

export default function App() {
  return (
    <>
      <View> 
        <Feed></Feed> 
      </View>

    </>
  );
}
