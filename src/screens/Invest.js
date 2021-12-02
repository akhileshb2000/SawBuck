import React, {useState} from 'react';
import { Dimensions, SafeAreaView, StyleSheet, TextInput, View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import { withTheme } from 'styled-components/native';

import api from '../services/api';

const Invest = ({index}) => {

  const [number, onChangeNumber] = React.useState(null);
  const [amount, setAmount] = useState("");

  
  const onePressed = () => {
    setAmount(amount + "1")
  }

  return (
    <SafeAreaView style={{backgroundColor: "black", height: Dimensions.get("window").height}}>
      <View style={styles.inputArea}>
        <Text style={styles.ETH}>ETH</Text>
        <TextInput
          style={styles.input}
          value={number}
          placeholder="0"
          keyboardType="decimal-pad"
          placeholderTextColor="white"
          color="white"
          returnKeyLabel='Done' 
          returnKeyType='done' 
        /> 
      </View>
      {/* <View style={styles.translated}>
        <Text style={{color: "white"}}>
          {amount}
        </Text>
        <Text style={{color: "white"}}>
          SABA
        </Text>
      </View> */}
      <View style={{marginLeft: 50}}>
        <TouchableOpacity
            onPress={onePressed}
            style={styles.reviewButton}>
            <Text style={{color: 'white', fontSize: 24}}>Review</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ETH: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "white",
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputArea: {
    flexDirection: "row",
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 100,
    margin: 12,
    backgroundColor: "black",
    color: "white",
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ca7046',
  },
  translated: {
    backgroundColor: "black"
  }
});

export default Invest;