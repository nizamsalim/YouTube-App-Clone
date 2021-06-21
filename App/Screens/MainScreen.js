import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
