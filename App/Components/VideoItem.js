import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const VideoItem = ({ video }) => {
  //   console.log(video.snippet.title);
  return (
    <View style={styles.video_container}>
      <View style={styles.thumbnail}>
        <Image source={video.snippet.thumbnails.high.url} width="100" />
      </View>
      <View style={styles.description}></View>
    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  video_container: {
    width: "100%",
    height: 300,
    backgroundColor: "red",
    // marginBottom: 10,
  },
  thumbnail: {
    flex: 0.69,
    backgroundColor: "green",
  },
  description: {
    flex: 0.31,
    // backgroundColor: "blue",
  },
});
