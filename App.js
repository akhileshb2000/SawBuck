import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Feed from './src/screens/Feed/Feed';
import Discover from './src/screens/Discover';

export default function App() {
  return (
    // <>
    //   <View> 
    //     <Feed></Feed> 
    //   </View>

    // </>
    <Discover />
  );
}
