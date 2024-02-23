import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
export default function SelectedText({ arr }) {
  let text = "";
  if (arr.length == 0) {
    text = "Please select items";
  } else {
    text = `${arr.length} item${arr.length > 1 ? "s" : ""} selected`;
  }
  return (
    <Text
      style={{
        marginLeft: 15,
        color: "white",
      }}
    >
      {text}
    </Text>
  );
}
