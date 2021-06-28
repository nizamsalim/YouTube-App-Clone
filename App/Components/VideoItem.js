import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const VideoItem = ({ video, channelImg }) => {
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
        <View style={styles.img_container}>
          <Image source={{ uri: channelImg }} style={styles.channel_img} />
        </View>
        <View style={styles.desc_container}>
          <Text style={styles.desc_text}> {video.snippet.title} </Text>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.details}>
              Doja Cat <View style={styles.dot} /> 36k views{" "}
              <View style={styles.dot} /> 2 hours ago
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require("../../assets/three_dots.png")}
            style={{ width: 20, height: 20, marginRight: 20 }}
          />
        </View>
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
    flex: 0.72,
    // backgroundColor: "green",
  },
  description: {
    flex: 0.27,
    backgroundColor: "#202124",
    padding: 13,
    flexDirection: "row",
  },
  thumbnail_image: {
    width: "100%",
    height: "100%",
  },
  desc_text: {
    color: "#fff",
    fontSize: 17,
  },
  channel_img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  desc_container: {
    // backgroundColor: "red",
    width: "83%",
    marginBottom: -10,
  },
  img_container: {
    // backgroundColor: "red",
    marginRight: 13,
  },
  details: {
    color: "grey",
    fontSize: 14,
  },
  //   dot: {
  //     width: 10,
  //     height: 10,
  //     color: "#fff",
  //   },
});
