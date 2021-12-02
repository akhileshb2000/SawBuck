import React from 'react'

import styled from 'styled-components/native'
import {
    TouchableOpacity,
 } from 'react-native';
import { 
    Entypo,
    Feather,
    FontAwesome5,
    Ionicons,
 } from '@expo/vector-icons';


const Container = styled.View`
    height: 65px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
    border-top-width: 1px;
    border-top-color: rgba(255, 255, 255, 0.2);
    flex-direction: row;
`
const Menu = styled.View`
    width: 25%;
    height: 100%;
    justify-content: center;
    align-items: center; 
`

const Icon = styled.Image.attrs({resizeMode: 'contain'})`
    height: 32px
`

const MenuText = styled.Text`
    font-size: 9px;
    margin-top: 3px;
    color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.6)')}
`

const Tabs = ({ navigation }) => {

    return (
        <Container>
            <Menu>
                <TouchableOpacity onPress={() => navigation.push("SawBuck")}>
                    <Entypo name="globe" size={30} color="white" />
                </TouchableOpacity>
            </Menu>

            <Menu>
                <TouchableOpacity onPress={() => navigation.push("SawBuck")}>
                    <Feather name="search" size={30} color="white" />
                </TouchableOpacity>
            </Menu>

            <Menu>
                <TouchableOpacity onPress={() => navigation.push("SawBuck")}>
                    <FontAwesome5 name="wallet" size={30} color="white" />
                </TouchableOpacity>
            </Menu>

            <Menu>
                <TouchableOpacity onPress={() => navigation.push("SawBuck")}>
                    <Ionicons name="person-outline" size={30} color="white" />
                </TouchableOpacity>
            </Menu>
        </Container>
    )
} 

export default Tabs