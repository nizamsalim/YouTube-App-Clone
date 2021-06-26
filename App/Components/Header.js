import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";

const Header = () => {
  let platform = Platform.OS;
  console.log(platform);
  return (
    <View style={styles.header_container}>
      <View style={styles.logo_container}>
        <Image
          source={require("../../assets/yt_header_icon.png")}
          style={styles.logo_img}
        />
        <Text style={styles.logo_text}>YouTube</Text>
      </View>

      <View style={styles.icons_container}>
        <Image
          source={require("../../assets/user_icon.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/search_icon.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/notification_icon.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/cast_icon.png")}
          style={styles.icon}
        />
      </View>
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
    justifyContent: "space-between",
    borderBottomColor: "rgba(255,255,255,0.3)",
    borderBottomWidth: 0.19,
  },
  logo_container: {
    width: "50%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  icons_container: {
    width: "50%",
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    height: "100%",
  },
  logo_text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    paddingLeft: -1,
    letterSpacing: -1.8,
  },
  logo_img: { backgroundColor: "#212121", borderRadius: 15, marginLeft: 10 },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
});
