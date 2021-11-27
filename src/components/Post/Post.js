import React, {useState} from "react";
import { 
    View, 
    Text,
    Button,
    TouchableWithoutFeedback
 } from "react-native";

import { Video, AVPlaybackStatus } from 'expo-av';
//import Video from "expo"

// import Video from "react-native-video";
import styles from "./PostStyles";

const Post = () => {

     const [paused, setPaused] =  useState(false);


    const onPlayPausePress = () => {
        console.warn("touched!");
        setPaused(!paused);
    }
 
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <Video
                style={styles.video}
                source={ require("../../assets/videos/test.mp4") }
                shouldPlay={true}
                resizeMode="contain"
                isLooping={true}
                paused={paused}
            />
        </TouchableWithoutFeedback> 

      </View>
    );
}

export default Post;