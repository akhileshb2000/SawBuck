import React from 'react'

import { Dimensions, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

import ViewPager from '@react-native-community/viewpager'

import VideoPlayer from './VideoPlayer'
import Info from './Info'
import Header from './Header'

const {height} = Dimensions.get('window')

const Container = styled(ViewPager)`
    height: 100%
`
const Gradient = styled(LinearGradient)`
    height: 100%;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`

const Center = styled.View`
    flex: 1;
    flex-direction: row;
`

const Main = ({videos}) => {
    return (
        <Container orientation='vertical'>
            {videos.map((item, index) => {
                return (
                    <View key={index}>  
                        <Header index={index}/>
                        <VideoPlayer video={index}/>
                        <Gradient
                            Locations={[0, 0.26, 0.6, 1]}
                            colors={[
                                'rgba(100, 100, 100, 0)',
                                'rgba(50, 50, 50, 0)',
                                'rgba(50, 50, 50, 0)',
                                'rgba(0, 0, 0, 1)'
                            ]}>
                            <Center>
                                <Info index={index}></Info>
                            </Center>
                        </Gradient>
                    </View>
                )
            })}
        </Container>
    )
}

export default Main