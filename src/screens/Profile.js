import React from 'react'

import { StatusBar, View, Button } from 'react-native'

import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

import Tabs from '../components/Tabs'

import api from '../services/api';

const Container = styled(View)`
    height: 100%;    
    background: black;
`

const ProfilePic = styled.ImageBackground`
    background-color: black;
    max-height: 225px;
    flex: 1;
`

const UserName = styled.Text`
    paddingTop: 15px;
    paddingLeft: 25px;
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    letter-spacing: -0.3px
`

const HomeTown = styled.Text`
    font-size: 17px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    letter-spacing: -0.3px;
    paddingLeft: 27px;
    paddingRight: 10px;
    paddingBottom: 10px;
`
const PriceContainer = styled.View`
    paddingLeft: 25px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const CoinName = styled.Text`
    font-size: 18px;
    color: #BCB0FF;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
 `

 const Price = styled.Text`
    font-size: 36px;
    color: #BCB0FF;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
 `
 
 const PriceChange = styled.Text`
    font-size: 18px;
    color: #00FFA3;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    flex-direction: row;
    justify-content: space-between;
 ` 

 const GraphImg = styled.ImageBackground`
    background-color: black;
    max-height: 225px;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
 `
const GraphTextRow = styled.View`
    flex-direction: row;
`

const GraphText = styled.Text`
    font-size: 18px;
    width: 20%;
    color: white;
    justify-content: center;
    align-items: center;
    textAlign: center;
 `

 const ButtonView = styled.View`
    paddingLeft: 40px;
    paddingRight: 40px;
    paddingTop: 50px;
    flex-direction: column;
 `

const Profile = ({navigation, route}) => {
    const index = route.params.index;
    return (
        <Container orientation='vertical'>
            <StatusBar 
                translucent
                backgroundColor='transparent'
                barStyle='light-content'
            />
            <ProfilePic source={api[index].profilePic}/>
            <UserName>{api[index].name}</UserName>
            <HomeTown>{api[index].hometown}</HomeTown>
            <PriceContainer>
                <CoinName>{"1 " + api[index].coinName + " ="}</CoinName>
                <PriceChange>
                    <Price>{api[index].price + "     "}</Price>
                    <AntDesign name="caretup" size={24} color= "#00FFA3" />
                    {"  " + api[index].priceChange}
                </PriceChange>
            </PriceContainer>
            <GraphImg source={api[index].graphPic}/>
            <GraphTextRow>
                <GraphText>{"1D"}</GraphText>
                <GraphText>{"1W"}</GraphText>
                <GraphText>{"1M"}</GraphText>
                <GraphText>{"3M"}</GraphText>
                <GraphText>{"1Y"}</GraphText>
            </GraphTextRow>
            <ButtonView>
                <Button 
                    title={"JOIN " + api[index].coinName}
                    onPress={() => navigation.push("Invest")}
                    color="#BCB0FF"
                />
            </ButtonView>
            <Tabs navigation={navigation}/>
        </Container>
    )
}

export default Profile