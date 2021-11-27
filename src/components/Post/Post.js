import React from "react";
import { 
    View, 
    Text
 } from "react-native";

import Video from "react-native-video";
import styles from "./PostStyles";

const Post = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is a post.
            </Text>
            {/* <Video
                source={ { uri: "../../assets/videos/rr.mp4"} }
                style={styles.video}
            /> */}
        </View>
    )
}

export default Post;