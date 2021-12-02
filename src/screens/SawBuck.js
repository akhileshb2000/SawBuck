import React from 'react'

import { 
    StatusBar,
    Image,
    StyleSheet,
 } from 'react-native'
import styled from 'styled-components/native'

import api from '../services/api'


const Container = styled.View`
    flex: 1;
    background: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const styles = StyleSheet.create({
    logo: {
      width: '50%',
      height: '40%',
    },
  });

const SawBuck = () => {

    return (
        <>
            <StatusBar 
                translucent
                backgroundColor='transparent'
                barStyle='light-content'
            />
            <Container>
                <Image
                    style={styles.logo}
                    source={require('../../assets/sawbucklogo.png')}
                >
                </Image>
            </Container>
        </>
    )
}

export default SawBuck