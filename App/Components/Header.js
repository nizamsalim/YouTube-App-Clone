import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";

const Header = () => {
  let platform = Platform.OS;
  console.log(platform);
  return (
    <View style={styles.header_container}>
      <View style={styles.logo_container}>
        <Image
          source={require("../../assets/yt_icon.png")}
          style={styles.logo_img}
        />
        <Text style={styles.logo_text}>YouTube</Text>
      </View>
      <View style={styles.icons}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_container: {
    flex: 0.07,
    backgroundColor: "#212121",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  logo_container: {
    width: "50%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    width: "50%",
  },
  logo_text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    paddingLeft: -1,
    letterSpacing: -1.8,
  },
  logo_img: { backgroundColor: "#212121", borderRadius: 15 },
});
