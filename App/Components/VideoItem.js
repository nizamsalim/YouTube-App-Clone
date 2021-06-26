import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const VideoItem = ({ video }) => {
  //   console.log(video.snippet.title);
  return (
    <View style={styles.video_container}>
      <View style={styles.thumbnail}>
        <Image
          source={{ uri: video.snippet.thumbnails.high.url }}
          style={styles.thumbnail_image}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.desc_text}> {video.snippet.title} </Text>
        <Text style={styles.desc_text}> {video.snippet.channelTitle} </Text>
        <Text style={styles.desc_text}>
          {" "}
          {video.statistics.viewCount} views{" "}
        </Text>
      </View>
    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  video_container: {
    width: "100%",
    height: 300,
    // backgroundColor: "red",
    // marginBottom: 10,
  },
  thumbnail: {
    flex: 0.69,
    // backgroundColor: "green",
  },
  description: {
    flex: 0.31,
    // backgroundColor: "blue",
  },
  thumbnail_image: {
    width: "100%",
    height: "100%",
  },
  desc_text: {
    color: "#fff",
  },
});
