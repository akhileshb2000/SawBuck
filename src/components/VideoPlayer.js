import React from 'react'

import { View } from 'react-native'
import styled from 'styled-components/native'
import api from '../services/api'
import { Video } from 'expo-av'
import styles from "./Post/PostStyles";
import Post from '../components/Post/Post'


const Poster = styled.ImageBackground`
    height: 100%;
    flex: 1;
`

const VideoPlayer = ({index}) => {
    return (
        <View>
            {/* <Video 
                source={api[index].poster}
                shouldPlay={true}
                isLooping={true}
            /> */}
            <Post index={index}></Post>
        </View>
        
    )
}

export default VideoPlayer