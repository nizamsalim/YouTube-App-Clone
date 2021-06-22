import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View style={styles.categories_container}>
      <ScrollView></ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories_container: {
    flex: 0.05,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
});
