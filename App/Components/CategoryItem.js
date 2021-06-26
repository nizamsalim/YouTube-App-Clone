import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.cat_container}>
      <TouchableOpacity>
        <Text style={styles.cat_text}> {category.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cat_text: {
    color: "#fff",
    fontSize: 15,
  },
  cat_container: {
    marginLeft: 5,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#373737",
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 0.3,
  },
  all_cat_container: {
    color: "#000",
    backgroundColor: "#fff",
  },
});
