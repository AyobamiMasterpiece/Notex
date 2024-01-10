import { StyleSheet, View, Text } from "react-native";
import HorizontalRule from "./HorizontalRule";
import PrimaryBtn from "./PrimaryBtn";

export default function DeleteScreen({ onpress, ondelete }) {
  console.log("lol");
  return (
    <View style={styles.rootScreen}>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Delete Note
        </Text>
        <Text>Are you sure you want to delete this Note?</Text>
        <HorizontalRule></HorizontalRule>
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <PrimaryBtn style={styles.btn} onpress={onpress}>
            Cancel
          </PrimaryBtn>
          <PrimaryBtn style={styles.btn} textColor={"red"} onpress={ondelete}>
            Delete
          </PrimaryBtn>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",

    position: "absolute",
    opacity: 0.8,
    backgroundColor: "black",
    zIndex: 10,
  },

  card: {
    bottom: 10,
    backgroundColor: "grey",
    padding: 10,
    width: "90%",
    borderRadius: 10,
    marginBottom: 30,
  },
  btn: {
    flex: 1,
  },
});
