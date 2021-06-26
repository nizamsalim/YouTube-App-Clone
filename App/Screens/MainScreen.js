import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Videos from "../Components/Videos";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Categories />
      <Videos />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
});
