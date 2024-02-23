import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Checkbox({ onChange, checked, style }) {
  return (
    <Pressable
      style={[styles.checkboxBase, style, checked && styles.checkboxChecked]}
      onPress={onChange}
      hitSlop={10}
    >
      {checked && <Ionicons name="checkmark" size={20} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "grey",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "blue",
  },
});
