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

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    const onPlayPausePress = () => {
        console.warn("touched!");
        setPaused(!paused);
    }
 
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}> 
            <Video
                ref={video}
                style={styles.video}
                source={ require("../../assets/videos/test.mp4") }
                shouldPlay={true}
                resizeMode="contain"
                isLooping={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </TouchableWithoutFeedback> 

      </View>
    );
}

export default Post;