import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
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
