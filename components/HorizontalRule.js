import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalRule = () => {
  return <View style={styles.horizontalRule} />;
};

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomWidth: 1,
    borderBottomColor: "white", // You can set the color to your preference
    marginVertical: 10, // Adjust the margin as needed
  },
});

export default HorizontalRule;
