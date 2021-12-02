import React from 'react'

import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import api from '../services/api'
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin: 70px 10px 70px 10px;
`

const User = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    paddingLeft: 10px;
    paddingRight: 10px;
`

const PriceContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const UserName = styled.Text`
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    letter-spacing: -0.3px
`

const HomeTown = styled.Text`
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    letter-spacing: -0.3px;
    paddingLeft: 10px;
    paddingRight: 10px;
    paddingBottom: 10px;
`
const Price = styled.Text`
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    paddingLeft: 10px;
    paddingRight: 10px;
 `
 
 const PriceChange = styled.Text`
    font-size: 18px;
    color: #00FFA3;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    paddingLeft: 10px;
    paddingRight: 10px;
    justify-content: center;
 ` 

const Info = ({index, navigation}) => {
    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.push("Invest")}>
                <User>
                    <UserName>{api[index].name}</UserName>
                    <AntDesign name="right" size={40} color="#FFF" />
                </User>
                <HomeTown>{api[index].hometown}</HomeTown>
                <PriceContainer>
                    <Price>{api[index].price}</Price>
                    <PriceChange>
                        <AntDesign name="caretup" size={24} color= "#00FFA3" />
                        {api[index].priceChange}
                    </PriceChange>
                </PriceContainer>
            </TouchableOpacity>
        </Container>
    )
}

export default Info