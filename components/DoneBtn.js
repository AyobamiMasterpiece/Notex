import { StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import { View, Pressable } from "react-native";

const DoneBtn = ({ handleSaved, isdone, noteObj }) => {
  return (
    <View style={styles.checkmark}>
      <Pressable
        android_ripple={{
          color: "white",
          borderless: true,
          radius: 20,
        }}
        onPress={handleSaved}
      >
        {isdone == false &&
          (!noteObj.note.length == 0 || !noteObj.title.length == 0) && (
            <Icon name="done" type="ionicons" size={30} color={"white"}></Icon>
          )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  checkmark: {
    borderRadius: 50,
    height: 40,
    width: 40,
    position: "absolute",
    right: 0,
    // backgroundColor: "green",
  },
});
export default DoneBtn;
