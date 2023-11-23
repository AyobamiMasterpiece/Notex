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
//////////////////////remember to use logic for modal time by passing a prop to know wheter modal was opened by a note click
function ModalNote({
  visible,
  handleNoteNodal,
  notes,
  handleSetnote,
  noteData,
  ChangeNoteData,
}) {
  // console.log("mount");
  const [isdone, setIsDone] = useState(false);
  const [time, setTime] = useState(noteData.time);
  // const [noteObj,setNoteObj]=useState(noteData);
  // console.log(noteData.note, "play");

  const [noteObj, setNoteObj] = useState({
    // note: noteData.note,
    // title: noteData.title,
    note: "4",
    title: "7",
  });
  console.log(noteData);
  console.log(noteObj, "k");
  // console.log(noteData, "ppp");
  // console.log(noteObj, "kkk");
  // const [time, setTime] = useState("");
  useEffect(() => {
    // setTime(getCurrentTime12Hour());
    // setTime(noteData.time);
    ChangeNoteData(new Note());

    setNoteObj({
      note: noteData.note,

      title: noteData.title,
    });

    console.log("now-new");
    return () => {
      console.log("unmount");

      setIsDone(false);
    };
  }, [visible]);

  // console.log(notes);

  function handleSaved() {
    setIsDone(true);
    let note = new Note(noteObj.note, noteData.time, noteObj.title);
    handleSetnote((old) => {
      return [note, ...old];
    });
    handleNoteNodal();
    // console.log(notes);
  }
  function handlenotechange(text) {
    setNoteObj({
      ...noteObj,
      note: text,
    });
    setIsDone(false);
  }
  function handletitlechange(text) {
    setNoteObj({
      ...noteObj,
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
                  (!noteObj.note.length == 0 || !noteObj.title.length == 0) && (
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
            <Text style={styles.time}>{noteData.time}</Text>
          </View>

          <View style={styles.titleInput}>
            <TextInput
              placeholder={"Title"}
              style={styles.title}
              placeholderTextColor={"white"}
              cursorColor="white"
              onChangeText={handletitlechange}
              value={noteObj.title}
            ></TextInput>
          </View>
          <View style={styles.note}>
            <ScrollView>
              <TextInput
                value={noteObj.note}
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
