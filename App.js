// import { StatusBar } from 'expo-status-bar';
import React from "react";
import MainScreen from "./App/Screens/MainScreen";
import { View, StyleSheet, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
