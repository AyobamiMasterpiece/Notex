import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { Icon } from "@rneui/themed";
import { useEffect, useState } from "react";
import { getCurrentDate, getCurrentTime12Hour, Note } from "./dateFunctions";

function ModalNote({ visible, handleNoteNodal, notes, handleSetnote }) {
  console.log("mount");
  const [isdone, setIsDone] = useState(false);
  const [noteData, setNoteData] = useState({
    note: "",
    title: "",
  });
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(getCurrentTime12Hour());
    return () => {
      console.log("unmount");
      setNoteData({
        note: "",
        title: "",
      });

      setIsDone(false);
    };
  }, [visible]);

  // console.log(time);
  function handleSaved() {
    setIsDone(true);
    let note = new Note(noteData.note, time, noteData.title);
    handleSetnote((old) => {
      return [note, ...old];
    });
    handleNoteNodal();
    console.log(notes);
  }
  function handlenotechange(text) {
    setNoteData({
      ...noteData,
      note: text,
    });
    setIsDone(false);
  }
  function handletitlechange(text) {
    setNoteData({
      ...noteData,
      title: text,
    });
    setIsDone(false);
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={styles.modal}
      transparent={true}
    >
      <View style={styles.noteContainer}>
        <View style={styles.innerView}>
          <View style={styles.menu}>
            <TouchableHighlight>
              <Icon
                name="arrowleft"
                type="antdesign"
                size={25}
                color={"white"}
                onPress={handleNoteNodal}
              ></Icon>
            </TouchableHighlight>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 15,
                color: "white",
              }}
            >
              Notes
            </Text>

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
                  (!noteData.note.length == 0 ||
                    !noteData.title.length == 0) && (
                    <Icon
                      name="done"
                      type="ionicons"
                      size={30}
                      color={"white"}
                    ></Icon>
                  )}
              </Pressable>
            </View>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.time}>{time}</Text>
          </View>

          <View style={styles.titleInput}>
            <TextInput
              placeholder={"Title"}
              style={styles.title}
              placeholderTextColor={"white"}
              cursorColor="white"
              onChangeText={handletitlechange}
              value={noteData.title}
            ></TextInput>
          </View>
          <View style={styles.note}>
            <ScrollView>
              <TextInput
                value={noteData.note}
                multiline={true}
                autoFocus={true}
                style={styles.notePad}
                cursorColor="white"
                placeholder="Note something down"
                placeholderTextColor={"white"}
                onChangeText={handlenotechange}
              ></TextInput>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    flex: 1,
    alignItems: "center",

    // height: "20%",
    // width: "99%",
    // borderTopRightRadius: 35,
    // borderTopLeftRadius: 35,
    // alignSelf: "center",
    // position: "absolute",
    // bottom: 0,

    backgroundColor: "#424242",
  },
  timeBox: {
    marginTop: 50,
    // backgroundColor: "yellow",
  },
  innerView: {
    width: "95%",
    marginTop: 10,
    height: "95%",
    // backgroundColor: "red",
  },
  time: {
    color: "white",
  },
  titleInput: {
    // backgroundColor: "pink",

    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  note: {
    padding: 10,
    marginTop: 5,
  },
  notePad: {
    fontSize: 15,
    color: "white",
  },
  menu: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "5%",

    margin: 0,
    // backgroundColor: "pink",
  },
  checkmark: {
    position: "absolute",
    right: 0,
  },
});

export default ModalNote;
