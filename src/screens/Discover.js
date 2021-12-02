import React from 'react'

import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/Header'
import Main from '../components/Main'
import Tabs from '../components/Tabs'

import api from '../services/api'

const Container = styled.View`
    flex: 1;
    background: white;
`

const Discover = ({ navigation }) => {
    return (
        <>
            <StatusBar 
                translucent
                backgroundColor='transparent'
                barStyle='light-content'
            />
            <Container>
                <Main navigation={navigation} videos={api}/>
                <Tabs navigation={navigation}/>
            </Container>
        </>
    )
}

export default Discover