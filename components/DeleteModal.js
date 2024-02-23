import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Animated } from "react-native";

export default function DeleteModal({ onpress, fadeAnim }) {
  // Initial opacity: 0

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Pressable
        android_ripple={{ color: "grey" }}
        onPress={onpress}
        // onPressIn={() => console.log("p")}
        // style={({ pressed }) => (pressed ? { backgroundColor: "pink" } : {})}
      >
        <Text style={styles.text}>Delete</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: "50%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: "absolute",
    right: 20,
    top: 40,
    zIndex: 5,
  },
  text: {
    padding: 10,
    color: "white",
    // backgroundColor: "red",
  },
});
