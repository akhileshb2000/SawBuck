import React, {useState} from "react";
import { 
    View, 
    Text,
    Button,
    TouchableWithoutFeedback
 } from "react-native";

import { Video } from 'expo-av';
import styles from "./PostStyles";

import { AntDesign } from '@expo/vector-icons';

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
        <View style={styles.uiContainer}>
            <View style={styles.rightSide}>
                <AntDesign name="right" size={24} color="#FFF" />
            </View>
            <View style={styles.bottomSide}>
                <Text style={styles.rapperName}>
                    @Roheezy
                </Text>
                <Text style={styles.hometown}>
                    Leesburg, VA.
                </Text>
                <View style={styles.priceRow}>
                    {/* Need to do the Current Price + The Price Change*/}
                    <Text style={styles.currentPrice}>$RICH = $124.67</Text>
                    <AntDesign name="caretup" size={24} color= "#00FFA3" />
                    <Text style={styles.priceChange}>52% last month</Text>
                </View>
            </View>

        </View>
      </View>
    );
}

export default Post;