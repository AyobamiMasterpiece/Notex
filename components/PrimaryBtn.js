import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryBtn({ children, textColor, style, onpress }) {
  return (
    <View style={[styles.btncontain, style]}>
      <Pressable android_ripple={{ color: "white" }} onPress={onpress}>
        <Text
          style={{
            color: textColor,
            fontSize: 17,
            textAlign: "center",
            padding: 10,
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  btncontain: {
    // alignItems: "center",
    // backgroundColor: "yellow",
  },
});
