import React from 'react'

import styled from 'styled-components/native'
import api from '../services/api'
import { Ionicons } from '@expo/vector-icons'; 

const Container = styled.View`
    top: 25px;
    width: 100%
    align-items: center;
    flex-direction: row;
    position: absolute;
    margin: 20px 20px;
    z-index: 1;
`
const SongName = styled.Text`
    color: white;
    letter-spacing: 0.8px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    opacity: ${props => (props.bold ? 1 : 0.8)};
    font-size: ${props => (props.bold ? '16px' : '15px')};
`

const Header = ({index}) => {
    return (
        <Container>
            <Ionicons name="md-barcode-outline" size={24} color="white" />
            <SongName>{" " + api[index].song}</SongName>
        </Container>
    )
}

export default Header