import React from 'react'

import styled from 'styled-components/native'

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

const Tabs = () => {
    return (
        <Container>
            <Menu>
                <Icon source={require('../../assets/favicon.png')} />
                <MenuText active='true'>Button</MenuText>
            </Menu>

            <Menu>
                <Icon source={require('../../assets/favicon.png')} />
                <MenuText active='true'>Button</MenuText>
            </Menu>

            <Menu>
                <Icon source={require('../../assets/favicon.png')} />
                <MenuText active='true'>Button</MenuText>
            </Menu>

            <Menu>
                <Icon source={require('../../assets/favicon.png')} />
                <MenuText active='true'>Button</MenuText>
            </Menu>
        </Container>
    )
} 

export default Tabs