import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import Feed from './src/screens/Feed/Feed';

export default function App() {
  return (
    <SafeAreaView>
      <Feed></Feed>
    </SafeAreaView>
  );
}
