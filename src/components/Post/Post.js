import React, {useState} from "react";
import { 
    View, 
    TouchableWithoutFeedback
 } from "react-native";

import { Video } from 'expo-av';
import styles from "./PostStyles";
import api from "../../services/api";
import { AntDesign } from '@expo/vector-icons';

const Post = ({index}) => {

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
                source={ api[index].poster }
                shouldPlay={true}
                resizeMode={"cover"}
                isLooping={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </TouchableWithoutFeedback>
      </View>
     
    );
}

export default Post;